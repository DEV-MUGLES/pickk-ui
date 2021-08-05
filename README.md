# PICKK 디자인 시스템 모노레포

이 곳을 진실의 원천으로 삼고 동기화 작업에서 해방됩시다.

- 🎨 컬러 스킴 라이브러리 제공
- ⚙️ 토큰에 대한 TypeScript 지원
- 🔄 Figma 프로토타이핑과 애플리케이션 형상 동기화

[`packages`](./packages)에 있는 패키지들 사용법은 각 워크스페이스 `README.md`를 참고해주세요.

## 사용되는 명령어들

### 1. yarn install, add (전역)

```shell
# 설치
yarn

# 추가
yarn add <package-name>
```

### 2. 워크스페이스별 종속성 추가,제거

```shell
# 추가
yarn workspace <workspace-name> add <package-name>

# 제거
yarn workspace <workspace-name> remove <package-name>
```

### 3. 워크스페이스별 배포

```shell
# npm login
yarn npm login

# 버전 업데이트 (strategy = 'major'|'minor'|'patch')
yarn workspace <workspace-name> version <strategy>
# ex: yarn workspace @pickk/design-token version patch

# 버전 업데이트 커밋 생성
git commit -m "chore(<scope-name>): release <workspace-name> <version>"
# ex: git commit -m "chore(design-token): release @pickk/design-token 0.0.3"

# 태그 부여
git tag -a "<workspace-name>@<version>"
# ex: git tag -a "@pickk/design-token@0.0.3"

# 배포
yarn workspace <workspace-name> npm publish
```

## Ref

https://github.com/daangn/karrot-ui
