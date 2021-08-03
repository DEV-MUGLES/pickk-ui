import type { ColorToken, KnownColorGroup } from './types';
import { isSingleColorGroup, isKnownColorGroup } from './types';

const COLOR_TOKEN_REGEXP = /^(?<Group>[a-z]+)(?<Lightness>[1-9](?:\d+)?)$/;

type ColorValue = [
  Token: ColorToken,
  Group: KnownColorGroup,
  Lightness: number
];

export function parseColorToken(token: string): ColorValue {
  if (isSingleColorGroup(token)) {
    return [token, token, 0];
  }

  const result = token.match(COLOR_TOKEN_REGEXP);
  const group = result?.groups?.['Group'];
  const lightness = result?.groups?.['Lightness'];

  if (group == null || lightness == null) {
    throw new TypeError(
      `Invalid color token: ${token}, ${group}-${lightness}, ${result}, ${result?.groups}`
    );
  }

  if (!isKnownColorGroup(group)) {
    throw new TypeError(`${group} is unknown color group`);
  }

  return [token as ColorToken, group, parseInt(lightness)];
}
