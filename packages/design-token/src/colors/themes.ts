import type { ColorTheme } from './types';

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    black: '#000',
    /** opacity가 50%인 black */
    black50: 'rgba(0, 0 ,0, 0.5)',

    white: '#FFF',

    /** (필요시)Background, Large Divider에 사용 */
    gray1: '#F7F7F7',
    /** small divider, disabled, icon background 등 */
    gray2: '#EFEFEF',
    /** textbox와 같은 enabled border등 */
    gray3: '#C4C4C4',
    gray4: '#9A9A9A',
    /** SECONDARY TEXT */
    gray5: '#6C6C6C',
    /** PRIMARY / FOR TEXT */
    gray6: '#1A1A1A',

    // 포인트 컬러
    orange1: '#FDF5F5',
    orange2: '#FBD7D4',
    orange3: '#F7AFA8',
    orange4: '#F4877D',
    orange5: '#F05F51',
    /** FOR POINT */
    orange6: '#EC3726',

    blue: '#5577F5',
  },

  // @TODO: 디자인팀과 합의해서 확정 후 반영하기
  semanticScheme: {
    background: 'white',
    backgroundLow: 'gray100',
  },
});

// @TODO: 다크모드 만들면 그때 활용하기
export const dark = light;

/** shortcut of light.scheme */
export const palette = light.scheme;
