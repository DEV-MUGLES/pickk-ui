const singleColorGroupNames = ['white', 'black', 'black50', 'blue'] as const;

export type SingleColorGroup = typeof singleColorGroupNames[number];

export function isSingleColorGroup(str: string): str is SingleColorGroup {
  return singleColorGroupNames.includes(str as SingleColorGroup);
}

const knownColorGroupNames = [
  'black',
  'black50',
  'white',
  'gray',
  'orange',
  'blue',
] as const;

export type KnownColorGroup = typeof knownColorGroupNames[number];

export function isKnownColorGroup(str: string): str is KnownColorGroup {
  return knownColorGroupNames.includes(str as KnownColorGroup);
}

type MakeTokenSet<
  TGroup extends KnownColorGroup,
  TLightness extends number[]
> = `${TGroup}${TLightness[number]}`;

export type ColorToken =
  | 'black'
  | 'black50'
  | 'white'
  | MakeTokenSet<'gray', [1, 2, 3, 4, 5, 6]>
  | MakeTokenSet<'orange', [1, 2, 3, 4, 5, 6]>
  | 'blue';

export type ColorScheme = Record<ColorToken, string>;

export type SemanticColorScheme = {
  background: ColorToken | string;
  backgroundLow: ColorToken | string;
};

export type SemanticColorKey = keyof SemanticColorScheme;

export type ColorTheme = {
  /**
   * Raw color tokens
   */
  scheme: ColorScheme;

  /**
   * Sematic color object (isn't eagerly populated)
   */
  semanticScheme: SemanticColorScheme;
};
