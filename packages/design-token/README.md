# @karrotmarket/design-token

디자인 토큰이 무엇인가요?

> Design tokens are indivisible pieces of a design system such as colors, spacing, typography scale.
>
> -- [Design Token Working Group 정의](https://github.com/design-tokens/community-group)

디자인 토큰은 여러 디자인 도구, 개발환경 간에 디자인 시스템의 최소 단위를 공유할 수 있도록 표준을 제공하는 것을 목표로 합니다.

## Goals & Non-goals

Goal

- [상호운용성](https://en.wikipedia.org/wiki/Interoperability) 제공
- 라이브러리 배포만으로 전체 애플리케이션에 변경 적용
- 디자인 도구와 효율적으로 동기화

Non-goals

- 개발할 때 편하도록 High-level API 제공

## 사용법

```bash
yarn add @karrotmarket/design-token
```

### JavaScript (TypeScript)

```ts
import { colors } from '@karrotmarket/design-token';

// raw token
colors.light.scheme;

// semantic token
colors.light.semanticScheme;
```

### CSS (css-loader)

```ts
import '@karrotmarket/design-token/colors/light.css';
import '@karrotmarket/design-token/colors/dark.css';
```

[Conditional Exports](https://nodejs.org/api/packages.html#packages_conditional_exports) 기능이 지원되지 않는 환경이라면 다음과 같이 사용하세요.

```ts
import '@karrotmarket/design-token/lib/colors/light.css';
import '@karrotmarket/design-token/lib/colors/dark.css';
```

다음과 같이 [CSS Variables](<https://developer.mozilla.org/ko/docs/Web/CSS/var()>) 값이 추가됩니다.

```css
.light-theme {
  --color-white: #fff;
  --color-gray100: #f2f3f6;
  --color-gray200: #eaebee;
  --color-gray300: #dcdee3;
  --color-gray400: #d1d3d8;
  --color-gray500: #adb1ba;
  --color-gray600: #868b94;
  --color-gray700: #4d5159;
  --color-gray900: #212124;
  --color-carrot50: #fff5f0;
  --color-carrot100: #ffe2d2;
  --color-carrot200: #ffd2b9;
  --color-carrot300: #ffbc97;
  --color-carrot400: #ff9e66;
  --color-carrot500: #ff7e36;
  --color-carrot600: #fa6616;
  --color-yellow50: #fff7e6;
  --color-yellow500: #ffc552;
  --color-yellow800: #ce6400;
  --color-green50: #e8faf6;
  --color-green500: #00b493;
  --color-green800: #008c72;
  --color-red50: #fff3f2;
  --color-red800: #e81300;
  --color-blue50: #ebf7fa;
  --color-blue800: #0a86b7;
  --color-background: var(--color-white);
  --color-background-low: var(--color-gray100);
}

.dark-theme {
  --color-white: #212124;
  --color-gray100: #2b2e33;
  --color-gray200: #34373d;
  --color-gray300: #43474f;
  --color-gray400: #50545c;
  --color-gray500: #6d717a;
  --color-gray600: #868b94;
  --color-gray700: #adb1ba;
  --color-gray900: #eaebee;
  --color-carrot50: #ede4e0;
  --color-carrot100: #edd3c4;
  --color-carrot200: #edc4ad;
  --color-carrot300: #edb08e;
  --color-carrot400: #ee9561;
  --color-carrot500: #ed7735;
  --color-carrot600: #e96017;
  --color-yellow50: #ede6d6;
  --color-yellow500: #edb84e;
  --color-yellow800: #c05f03;
  --color-green50: #d8e9e5;
  --color-green500: #03a88a;
  --color-green800: #03836c;
  --color-red50: #ede2e2;
  --color-red800: #d81403;
  --color-blue50: #dbe6e9;
  --color-blue800: #0c7eab;
  --color-background: var(--color-white);
  --color-background-low: #17171a;
}
```

CSS 에서 `color: var(--color-carrot400)` 처럼 쓸 수 있습니다.

### Theme 적용하기

```html
<div class="light-theme">
  Light 테마가 적용됩니다

  <div class="dark-theme">Dark 테마가 적용됩니다</div>
</div>
```

Application 환경에서는 JavaScript 를 통해 Theme 을 제어하는 것을 권장합니다.

예시:

```ts
if (window.matchMedia('(prefers-color-scheme: dark)')) {
  document.body.classList.remove('light-theme');
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.remove('dark-theme');
  document.body.classList.add('light-theme');
}
```

시스템 설정만 사용하는 웹 프로젝트에서는 미리 구성된 스타일시트를 import 해서 쓸 수 있습니다.

```ts
import '@karrotmarket/design-token/colors/system.css';
```
