import type { ColorTheme } from './types';

export const light: Readonly<ColorTheme> = Object.freeze({
  scheme: {
    /** 불투명한 개체를 보여줘야할 때 opacity를 50% 부여해서 사용한다. */
    black: '#000',

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
    orange1: '#FFE2D2',
    orange2: '#FFD2B9',
    orange3: '#FFBC97',
    orange4: '#FF9E66',
    orange5: '#FF7E36',
    /** FOR POINT */
    orange6: '#FA6616',

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
