# Airbnb Site Copy Project

에어비앤비 사이트를 카피하는 포트폴리오용 프로젝트 입니다.

---

## 개발 가이드

개발시 준수해야할 점에 대한 가이드입니다.

- 개인 개발은 개인 `feature 브랜치`를 만들어 개발해주세요.
- 기능개발이 끝나면 `develop 브랜치`에 merge 후 push 해주세요.
- push하기 전에는 `conflict`를 해결하기 위해 pull를 하시고 push 해주세요.
- `master 브랜치`에서는 작업하지 말아주세요.

목차입니다. 필요한 부분을 링크 타고 들어가서 읽어주세요.

1. [컴포넌트 분할](#1.-컴포넌트-분할)
2. [폴더 설명](#2.-폴더-설명)
3. [네이밍 규칙](#3.-네이밍-규칙)
4. [svg 파일 관리](#4.-svg-파일-관리)

---

### 1. 컴포넌트 분할

컴포넌트는 성격에 따라 분할하며 분할 기준은 다음과 같습니다.

- Page Component

  Path 경로가 되는 컴포넌트입니다. (`/home`, `/list`, `/room`)

- Container Component

  상태나 통신을 하는 컴포넌트입니다. 이 컴포넌트에서는 사용자에게 보여지는 레이아웃등의 형태는 다루지 않습니다.

- Presentational Component

  뷰(레이아웃)을 그리는 컴포넌트입니다. 이 컴포넌트에서는 통신을 하지 않고 제어되는 컴포넌트와 같이 불가피한 경우를 제외하고는 상태를 가지지 않습니다.

- Context Component

  이 컴포넌트는 넓고 깊은 범위에서 사용되어야 하는 상태, 속성이 있을때 사용하는 컴포넌트입니다. 예를 들어 로그인된 상태를 알아야하는 경우, 계정 정보를 알아야 하는 경우 등이 있을 수 있습니다.

- hoc

  이 컴포넌트는 로딩인디케이터와 같이, 어떤 컴포넌트를 받아서 컴포넌트를 반환할 때 사용됩니다.

---

### 2. 폴더 설명

저장소의 폴더 구성은 다음과 같습니다.

#### src

**파일**

- `App.js`
- `index.js`

**폴더**

- `components`: view를 담당하는 Presentational Component와 해당 컴포넌트에 대한 scss파일을 담는 폴더입니다.
- `containers`: 정보의 통신과 상태를 관리하는 Container Component를 담는 폴더입니다.
- `contexts`: 상태 공유를 위한 context api 컴포넌트를 담는 폴더입니다.
- `css`: normalized css, reset css, 전역에서 관리되어야 하는 변수, 스타일 등이 설정된 scss파일을 담는 폴더입니다. 이 외의 scss파일은 담지 않는것을 권장합니다.
- `hoc`: 고차 컴포넌트를 담는 폴더입니다.
- `pages`: 페이지(경로)가 되는 컴포넌트를 담는 폴더입니다. 예를들어 `HomePage.js`, `ListPage.js` 등이 담길 수 있습니다.
- `svg`: 아이콘, 로고의 파일을 담는 폴더입니다.

---

### 3. 네이밍 규칙

네이밍은 팀원들이 회의하여 결정하도록 합니다. 아래는 예시일 뿐이며, 해당 네이밍을 따른다는 의미가 아닙니다.

- Container Component

  다음과 같이 네이밍합니다.

  `Home.js`, `List.js`, `Room.js`

- Presentational Component

  어미에 `View`를 붙여 네이밍합니다.

  `RoomListView.js`, `RecommandedView.js`, `RoomHostProfileView.js`

- Page Component

  어미에 `Page`를 붙여 네이밍합니다.

  `HomePage.js`, `ListPage.js`, `LoginPage.js`

- Scss

  Container Component의 이름을 따르되, 저장은 Presentational Component에 합니다.

  `HomePage.module.scss`, `Recommanded.module.scss`

---

### 4. svg 파일 관리

svg파일을 생성하는 방법은 두가지입니다.

- 직접 일러스트레이터 툴로 svg파일을 만든다.

- 에어비앤비 홈페이지 개발자 도구에서 svg태그를 복사하고 붙여넣기 한다.

에어비엔비 홈페이지에서 긁어올 경우 다음과 같은 정차를 따릅니다.

1. `svg`폴더에 `아이콘이름.svg`로 저장하고 내용을 긁어온 svg태그로 채워 넣습니다. svg태그 내에 있는 `style`과 같은 속성을 모두 빼주어야 합니다

```html
<!-- style속성을 부여하면 커스텀 스타일을 먹이기 힘듭니다. -->
<svg
  viewBox="0 0 18 18"
  role="img"
  aria-label="다음"
  focusable="false"
  style="height: 24px; width: 24px; display: block; fill: currentcolor;"
>
  <path
    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
    fill-rule="evenodd"
  ></path>
</svg>

<!-- 속성을 삭제하고 사용해주세요. -->
<svg viewBox="0 0 18 18">
  <path
    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
  />
</svg>
```

2. import할 때는 다음과 같이 import 해주세요.

```js
// 파일 상단 IMPORT
import { ReactComponent as Star } from '../svg/star.svg';

// 컴포넌트로서 svg 아이콘을 불러옵니다.
<Star className={style.star} />;
```
