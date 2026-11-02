# Design System — Kiturami Website Renewal

> 이 문서는 `Kiturami/index.html`과 해당 페이지에서 연결하는 CSS 및 폰트 파일을 기준으로 작성했다. 색상·크기·간격은 저장소의 실제 코드에서 확인한 값만 기록했으며, CSS 변수로 정의된 값은 변수명을 함께 표기한다.
>
> **적용 범위:** 메인페이지의 기존 디자인을 수정하지 않고, 앞으로 제작할 서브페이지가 메인페이지와 같은 시각 언어를 사용하도록 돕는 기준 문서다. 서브페이지 링크는 이 리뉴얼 프로젝트 내부 페이지로 연결하며, 기존 귀뚜라미 브랜드 사이트로 연결하지 않는다.

## 1. Project Overview

### 프로젝트 목적
- 귀뚜라미 브랜드 웹사이트를 HTML, CSS, JavaScript로 리뉴얼한 포트폴리오 프로젝트다.
- 메인페이지는 제품 소개, 증상별 고객 지원, 홍보 콘텐츠, 고객센터 안내 등을 한 페이지 안에서 제공한다.
- 사용자가 제품을 살펴보거나 보일러 문제 해결 및 고객 지원 정보를 찾도록 안내하는 것이 주요 목적이다.

### 메인페이지 콘텐츠 흐름
1. Hero 배너: 대표 제품·서비스 메시지를 이미지 슬라이드로 먼저 전달한다.
2. 제품 소개: 제품 카테고리를 카드형 슬라이드로 탐색하게 한다.
3. 증상별 자가 진단: 사용자가 겪는 문제를 선택하도록 한다.
4. 홍보 콘텐츠: 브랜드 소식 및 홍보 콘텐츠를 보여준다.
5. 고객센터: 전화·상담·자료 등의 지원 경로를 제공한다.
6. Footer: 회사 정보, 정책 링크, SNS, 패밀리 사이트, 수상·인증 정보를 정리한다.

이 순서는 첫 화면에서 브랜드 메시지와 제품을 인지시킨 뒤, 사용자의 문제 해결과 신뢰 형성에 필요한 정보를 제공하는 구조다.

### 서브페이지 제작 원칙
- 메인페이지의 색상, 폰트, 헤더·푸터, 버튼·카드의 형태를 재사용한다.
- 서브페이지마다 독립적인 브랜드 컬러나 별도의 UI 스타일을 새로 만들지 않는다.
- 서브페이지의 콘텐츠 구조는 페이지 목적에 맞게 달라질 수 있지만, 공통 컴포넌트의 외형과 인터랙션은 일관되게 유지한다.
- 기존 메인페이지의 레이아웃과 디자인은 이 문서를 적용한다는 이유로 변경하지 않는다.

## 2. Brand Identity

### 브랜드 인상
화면과 코드에서 확인되는 시각적 특징은 다음과 같다.
- 로고에 영문 `Kiturami`와 한글 `귀뚜라미`를 함께 배치한다.
- 기본 바탕은 흰색과 매우 옅은 회색·푸른 회색 계열이다.
- 주요 행동과 강조에는 파란색을 사용한다.
- 제품 사진과 서비스 현장 이미지를 크게 사용해 제품·서비스 정보를 직접 전달한다.
- 둥근 모서리의 카드와 버튼, 넓은 여백으로 부드럽고 안정적인 인상을 만든다.

### 시각적 정체성 키워드
- 신뢰감: 흰색 바탕, 절제된 파란색 강조, 정돈된 정보 구조
- 기술·서비스: 제품 이미지, 자가 진단 아이콘, 고객센터 안내
- 접근성: 큰 클릭 영역, 명확한 라벨, 반응형 메뉴와 카드
- 친근함: 둥근 카드, 부드러운 전환, 한국어 가독성을 고려한 Pretendard

위 키워드는 코드에 나타난 디자인 요소를 바탕으로 한 해석이며, 별도의 공식 브랜드 가이드 문구를 인용한 것은 아니다.

## 3. Design Principles

1. **명확한 정보 우선순위:** 페이지 제목과 설명을 먼저 제시하고, 그 아래 관련 카드·목록·행동 버튼을 배치한다.
2. **행동의 명확성:** 이동 가능한 카드와 버튼은 라벨과 화살표 등으로 클릭 가능성을 전달한다.
3. **일관된 공통 UI:** 헤더, GNB, Footer, 주요 버튼, 카드의 색상·모서리·포커스 스타일을 서브페이지에서도 유지한다.
4. **콘텐츠 중심:** 제품 및 서비스 이미지가 정보 전달의 핵심인 영역에서는 이미지가 충분한 크기를 갖도록 한다.
5. **반응형 우선:** 화면이 좁아지면 2열·3열 그리드를 단일 열 또는 2열로 바꾸고, 메뉴는 모바일용 펼침 메뉴로 전환한다.
6. **접근성 고려:** 버튼의 목적을 설명하는 `aria-label`, 메뉴 상태를 전달하는 `aria-expanded`, 키보드 포커스 표시를 유지한다.
7. **과도한 장식 제한:** 의미가 없는 그림자·그라데이션·강한 색상 추가를 피하고 기존의 파란색 강조와 밝은 표면을 기준으로 한다.

## 4. Color System

### 전역 의미 색상 변수

아래 값은 `Kiturami/css/main.css`의 `:root`에 정의되어 있다. 새 서브페이지에서도 가능한 한 직접 색상 코드를 반복하기보다 이 변수를 우선 사용한다.

| CSS 변수 | 실제 값 | 용도 및 적용 상황 |
|---|---|---|
| `--color-background-default` | `#f8f4fc` | `body`의 기본 배경 |
| `--color-surface-default` | `#ffffff` | Header, 카드 등 기본 표면 |
| `--color-text-primary` | `#1f2937` | 주요 텍스트 및 GNB 텍스트 |
| `--color-text-secondary` | `#6b7280` | 설명·보조 텍스트 |
| `--color-text-link` | `#3ea6f0` | 링크용 의미 색상 변수 |
| `--color-border-default` | `#e5e7eb` | 기본 구분선·테두리 |
| `--color-action-primary` | `#0171bd` | 주요 버튼, 활성 링크, 포커스 강조 |
| `--color-action-secondary` | `#e99d08` | 보조 액션용 변수. 메인 CSS에서 정의됨 |
| `--color-action-outline` | `#0171bd` | 아웃라인 액션 |
| `--color-accent-blue` | `#3ea6f0` | 파란색 포인트 |
| `--color-accent-orange` | `#ffd8a6` | 주황색 포인트 |

### 영역별 추가 색상

| 값 또는 변수 | 확인 위치 | 사용 상황 |
|---|---|---|
| `--color-trouble-bg: #f2f4f8` | `css/trouble.css` | 증상별 고객 지원 영역 배경 |
| `--color-trouble-panel: #cdd9e5` | `css/trouble.css` | 엔지니어 이미지가 놓이는 서비스 패널 바탕 |
| `--color-trouble-line: #9aa3ad` | `css/trouble.css` | 고객 지원 버튼의 기본 테두리 |
| `#f1f3f7` | `css/cc.css` | 고객센터 섹션 배경 |
| `#0b6bcb` | `css/cc.css`, `css/footer.css` | 고객센터 주요 버튼·아이콘·포커스 및 Footer hover |
| `#e8f0fb` | `css/cc.css` | 고객센터 링크 카드 배경 |
| `#d9e5f8` | `css/cc.css` | 고객센터 링크 카드 hover |
| `#e9ebef` | `css/footer.css` | Footer 구분선 |
| `#dfe2e8` | `css/footer.css` | SNS 및 패밀리 사이트 컨트롤 테두리 |

### 색상 적용 규칙
- 기본 페이지 바탕은 `--color-background-default`, 카드·헤더는 `--color-surface-default`를 기준으로 한다.
- 주요 행동은 `--color-action-primary`로 강조한다.
- 본문과 보조 설명은 각각 `--color-text-primary`, `--color-text-secondary`를 우선 적용한다.
- 섹션별 추가 색상은 해당 섹션과 같은 성격의 서브페이지에서만 참고한다.
- 코드에 없는 새로운 브랜드 컬러를 임의로 추가하지 않는다.
- 메인 CSS의 변수와 일부 섹션 CSS의 직접 색상 값이 함께 사용되고 있으므로, 기존 영역의 색상을 일괄 치환하지 않는다.

## 5. Typography

### 폰트
- 메인페이지는 `../font/css/pretendardvariable.css`를 불러오고, `body`에 `font-family: "Pretendard Variable", sans-serif;`를 적용한다.
- 서브페이지 본문·UI도 기본적으로 **Pretendard Variable**을 사용한다.
- 저장소에는 Noto Sans KR, BKBulMatPro, SD Gothic Neo Round 폰트 파일도 있으나, 메인페이지 기본 폰트로 지정된 것은 Pretendard Variable이다. 별도 사용 근거 없이 다른 폰트로 교체하지 않는다.

### 실제 코드에서 확인한 대표 크기

| 요소 | 데스크톱 기준 | 반응형에서 확인된 크기 | 굵기·행간 등 |
|---|---:|---:|---|
| 로고 영문 | 24px | 18px (1024px 이하) | 800, line-height 0.95 |
| 로고 한글 | 20px | 12px (1024px 이하) | 800, line-height 1 |
| GNB | 18px | 13px (1200px 이하), 모바일 15px | 500, line-height 1 |
| 제품 섹션 제목 | 42px | 36px → 30px → 26px | 600, line-height 1.2 |
| 제품 섹션 설명 | 24px | 20px → 16px → 14px | 500, line-height 1.4 |
| 증상 영역 제목 | 38px | 34px → 30px → 24px | 700, line-height 1.3 |
| 고객센터 섹션 제목 | 42px | 36px → 28px | 600, line-height 1.2 |
| Footer 메뉴 | 18px | 15px (600px 이하) | 기본 굵기 |
| Footer 정보 | 19px | 16px (600px 이하) | line-height 1.45 |

위 수치는 각 CSS 파일에서 확인한 대표 요소의 값이다. 모든 페이지 제목이나 본문에 일괄 적용하는 고정 타입 스케일이 별도로 정의되어 있는 것은 아니다.

### 타이포그래피 적용 규칙
- 페이지 제목은 섹션의 핵심 정보를 가장 먼저 전달하도록 충분히 크게 둔다.
- 제목에는 코드에서 반복되는 음수 자간(예: `-1.5px`, `-1px`)을 요소별로 적용한다. 모든 텍스트에 같은 자간을 강제하지 않는다.
- 한국어 문장은 단어가 어색하게 잘리지 않도록 `word-break: keep-all`을 기본 리셋에서 사용한다.
- 본문·설명은 보조 텍스트 색상과 적절한 행간을 사용해 제목과 위계를 구분한다.

## 6. Layout & Spacing

### 공통 컨테이너
메인페이지 CSS에서 확인되는 컨테이너 값은 다음과 같다.

| 컨테이너 | 데스크톱 너비 | 1200px 이하 | 1024px 이하 |
|---|---|---|---|
| Header 내부 | `max-width: 1920px`, 좌우 padding 48px | 좌우 padding 32px | 좌우 padding 20px |
| 제품·고객센터·Footer 내부 | `width: min(1760px, calc(100% - 80px))` | `calc(100% - 64px)` | `calc(100% - 40px)` |
| 증상별 고객 지원 내부 | `width: min(1700px, calc(100% - 80px))` | `width: min(1760px, calc(100% - 64px))` | `calc(100% - 40px)` |
| Mega menu 내부 | `max-width: 1724px` | 별도 패딩·간격 조정 | 화면 폭에 맞춰 2열/세로형 |

컨테이너는 `margin: 0 auto`로 가운데 정렬한다. 서브페이지는 해당 페이지 CSS에 이미 존재하는 공통 컨테이너 규칙을 재사용하고, 확인되지 않은 새 최대 너비를 임의로 만들지 않는다.

### 섹션 간격
- 제품 섹션: 기본 `padding: 110px 0`, 1024px 이하 72px, 600px 이하 56px.
- 증상별 지원 섹션: 기본 `padding: 80px 0`, 1024px 이하 56px, 600px 이하 44px.
- 고객센터 섹션: 기본 `padding: 124px 0 126px`, 1024px 이하 72px 0 80px, 600px 이하 56px 0 64px.
- Footer 상단: 기본 `padding: 56px 0 52px`, 모바일에서는 세로 배치와 함께 36px 0 32px.

섹션의 중요도와 콘텐츠 밀도에 따라 여백이 다르므로 모든 섹션에 동일한 padding을 적용하지 않는다.

### Grid와 Flex
- Header 내부는 가로 Flex이며 로고, GNB, 언어 선택을 양 끝과 중앙에 배치한다.
- 제품 제목 영역은 가로 Flex로 제목·설명과 VIEW MORE를 양쪽에 둔다. 좁은 화면에서는 세로 방향으로 바꾼다.
- 증상 카드는 데스크톱 3열 × 2행 Grid, 모바일 2열 Grid다.
- 증상·서비스 전체 영역은 데스크톱 2열 Grid이며 1024px 이하에서 1열로 전환한다.
- 고객센터 바로가기 카드는 데스크톱 3열 Grid이며, 좁은 화면에서는 콘텐츠에 맞춰 재배치한다.
- Footer 회사 정보는 데스크톱 4열, 1200px 이하 2열, 600px 이하 1열이다.

## 7. Components

### Header / GNB
- 클래스: `.header`, `.header-inner`, `.logo`, `.gnb`, `.gnb-item`, `.menu-toggle`
- 데스크톱 Header 높이는 90px이며 흰색 배경을 사용한다.
- 내부는 최대 1920px, 좌우 padding 48px의 Flex 레이아웃이다.
- 로고는 영문과 한글을 세로로 쌓고 파란색 `--color-action-primary`를 사용한다.
- GNB는 가로 정렬, 기본 간격 42px이며 1200px 이하에서는 26px로 줄어든다.
- GNB 링크는 기본 `--color-text-primary`, hover 시 `--color-action-primary`로 바뀐다.
- 1024px 이하에서는 Header가 상단 고정 60px이 되고 햄버거 메뉴를 사용한다.

### Mega Menu
- 클래스: `.mega-menu`, `.mega-menu-inner`
- Header 아래에 전체 폭으로 펼쳐지는 하위 메뉴다.
- 흰색 표면, 얇은 구분선(일부 최종 스타일에서는 border 제거), 부드러운 그림자를 사용한다.
- 데스크톱에서는 항목을 가로 또는 Grid로 배치하며, 1024px 이하에서는 화면 안에서 스크롤 가능한 메뉴로 전환한다.
- 현재 구현은 `.is-active`, `.mega-menu-open`, `.is-open` 클래스로 열린 상태를 표현한다.

### Language Selector
- 클래스: `.language`, `.language-toggle`, `.language-menu`, `.language-option`
- 언어 아이콘, 현재 언어, 화살표로 구성된 버튼과 드롭다운 목록이다.
- 메뉴는 흰색 배경, 1px 테두리, 10px radius, 그림자를 사용한다.
- 옵션 hover/focus/선택 상태는 `#f2f2f2` 배경으로 구분한다.
- 현재 선택 언어는 JavaScript로 텍스트와 문서 언어에 반영하고 localStorage에 저장한다.

### Hero Slider
- 클래스: `.hero-sec`, `.visual`, `.swiper`, `.hero-controls`
- 메인 배너는 Swiper를 사용하며 PC용·모바일용 이미지를 별도로 제공한다.
- 데스크톱 배너 높이는 600px, 1024px 이하에서는 `100dvh`다.
- 이전/다음 버튼, 페이지네이션, 자동 재생/일시정지 버튼을 제공한다.
- 이미지에는 영역에 맞춰 `object-fit: cover`를 적용한다.

### Product Card
- 클래스: `.product-sec`, `.product-inner`, `.product-heading`, `.product-card`, `.product-label`
- 제품 카드는 링크를 포함한 이미지 중심 카드다.
- 카드 기본 크기는 400 × 360px, radius 16px이며 활성 카드는 높이 430px이다.
- 이미지가 카드 전체를 채우며 `object-fit: cover`를 사용한다.
- 하단 제품명은 반투명 흰색 pill 형태(`rgba(255, 255, 255, 0.72)`)로 배치한다.
- 중앙 카드 확대 효과는 `.is-center-product` 상태에서 적용된다.
- 카드 링크에는 키보드 사용자를 위한 `:focus-visible` outline이 있다.

### Symptom Card
- 클래스: `.trouble-symptoms`, `.trouble-card`, `.trouble-icon`, `.trouble-card-foot`, `.trouble-arrow`
- 증상 아이콘과 증상명, 오른쪽 화살표로 구성한다.
- 흰색 표면, 20px radius, 약한 그림자를 기본으로 한다.
- hover/focus-visible 시 위로 4px 이동하고 그림자를 강화한다.
- 화살표는 hover/focus 시 오른쪽으로 4px 이동한다.

### Customer Center Card / Button
- 클래스: `.cc-card`, `.cc-call`, `.cc-shortcut`, `.cc-link`, `.cc-btn`, `.cc-btn--primary`
- 고객센터 섹션은 큰 흰색 카드와 파란색 강조 버튼을 사용한다.
- 기본 카드 radius는 40px이며 1024px 이하에서 28px로 줄어든다.
- 주요 버튼은 파란색 배경과 흰색 텍스트, 보조 버튼은 흰색 배경과 회색 테두리다.
- 바로가기 카드는 아이콘과 텍스트, 화살표를 정렬한다.

### Footer
- 클래스: `.footer`, `.ft-inner`, `.ft-top-inner`, `.ft-sns`, `.ft-family`, `.ft-nav`, `.ft-info-inner`, `.ft-awards`
- 흰색 배경과 상단·내부 구분선을 사용한다.
- 상단에는 로고, SNS 링크, 패밀리 사이트 선택이 배치된다.
- 정책 메뉴 아래 회사 정보와 수상·인증 정보를 제공한다.
- 회사 정보는 데스크톱 4열 → 태블릿 2열 → 모바일 1열로 변경한다.

### 서브페이지 링크 규칙
- 새로 제작하는 서브페이지의 GNB, 카드, 버튼, breadcrumb 등 내부 이동 링크는 리뉴얼 프로젝트 내부의 상대 경로로 연결한다.
- 기존 브랜드 공식 사이트(`krb.co.kr` 등)로 연결하는 외부 링크를 새로 만들지 않는다.
- 현재 메인페이지 HTML에는 기존 브랜드 사이트로 향하는 링크가 남아 있다. 이 문서는 해당 링크를 수정하지 않으며, **서브페이지를 새로 제작할 때 외부 브랜드 사이트 링크 패턴을 복사하지 말 것**을 규칙으로 둔다.
- 외부 링크가 꼭 필요한 별도 기능은 프로젝트 요구사항에서 명시적으로 승인된 경우에만 사용한다.

## 8. Interaction

### Hover
- GNB 링크: 텍스트 색상을 기본 텍스트색에서 `--color-action-primary`로 변경한다.
- Mega Menu 항목: 텍스트 색상을 파란색으로 변경한다.
- 제품 카드: 중앙 카드 확대 상태를 부드럽게 전환한다.
- 증상·고객센터 카드: 위로 약간 이동하고 그림자를 강화한다.
- 버튼: 배경·테두리·텍스트 색상을 변경해 상호작용을 알린다.
- Footer SNS 및 정책 링크: 파란색으로 강조한다.

### Focus
- 기본 리셋은 `:focus` outline을 제거하지만 `:focus-visible`에는 outline을 제공한다.
- 주요 링크·버튼은 `outline: 3px solid`과 `outline-offset: 3px`를 사용하는 사례가 있다.
- 서브페이지에서 포커스 표시를 제거하거나 마우스 hover만으로 상태를 표현하지 않는다.

### Active / Open
- Mega Menu는 `.is-active`, `.mega-menu-open`, `.is-open` 클래스로 열림 상태를 표현한다.
- 모바일 메뉴는 `.menu-open` 클래스로 표시하며 햄버거 아이콘이 X 형태로 바뀐다.
- 언어 메뉴는 `hidden` 속성과 `aria-expanded`를 함께 갱신한다.
- Swiper 자동 재생 버튼은 `.is-play`와 `aria-pressed` 상태를 변경한다.
- CSS에서 별도의 공통 `:active` 디자인 토큰은 확인되지 않았다. 새 서브페이지에서 누름 상태가 필요하다면 기존 버튼 스타일을 해치지 않는 범위에서 추가하고, 임의의 색상 체계를 만들지 않는다.

### Transition
- 대부분의 UI 전환은 `0.2s ease`를 사용한다.
- 제품 카드 확대는 `0.45s ease`를 사용한다.
- Mega Menu는 약 `0.18s~0.2s ease` 전환을 사용한다.
- 기본 리셋은 `prefers-reduced-motion: reduce` 환경에서 애니메이션·전환 시간을 최소화한다.

## 9. Responsive Rules

메인페이지 CSS에서 확인되는 주요 분기점은 **1600px, 1200px, 1100px, 1024px, 900px, 600px**다. 모든 컴포넌트가 모든 분기점을 사용하는 것은 아니다.

| 기준 폭 | 적용 방향 |
|---|---|
| 1600px 이하 | 일부 카드·버튼·Footer 수치와 간격을 축소한다. |
| 1200px 이하 | Header 간격 축소, 콘텐츠 컨테이너 좌우 여백 축소, 일부 섹션을 1열로 전환한다. |
| 1100px 이하 | 증상 영역 버튼의 패딩·글자 크기를 추가 조정한다. |
| 1024px 이하 | Header를 60px 고정형 모바일 메뉴로 바꾸고, Hero의 모바일 이미지 사용, 여러 섹션을 1열로 전환한다. |
| 900px 이하 | Mega Menu 항목 간격과 글자 크기를 조정한다. |
| 600px 이하 | 모바일 전용 폰트·패딩·카드 크기를 적용하고 Grid를 1~2열로 재배치한다. |

### 반응형 제작 기준
- 데스크톱에서 가로 배치한 제목·버튼은 좁은 화면에서 세로 배치가 가능하도록 한다.
- 2열 이상 Grid는 모바일에서 콘텐츠가 읽히는 열 수로 줄인다.
- 고정 너비 카드가 화면 밖으로 넘치지 않도록 `minmax(0, 1fr)`, `width: 100%`, `max-width` 등을 기존 패턴에 맞춰 사용한다.
- 모바일에서는 메뉴를 햄버거 버튼으로 열고 닫을 수 있어야 하며, 하위 메뉴는 터치로 조작할 수 있어야 한다.
- 메인페이지에서 PC·모바일 이미지를 분리한 Hero처럼 이미지 비율과 크롭이 달라지는 경우 모바일 에셋을 별도로 준비한다.
- 새 서브페이지도 1024px와 600px 기준을 우선 점검하되, 컴포넌트에 이미 존재하는 1200px·1600px 등의 기준을 무조건 전역 규칙으로 강제하지 않는다.

## 10. Do & Don't

### Do
- `Pretendard Variable`을 기본 폰트로 사용한다.
- 기존 CSS 변수(`--color-*`)를 우선 사용한다.
- 흰색 표면과 밝은 회색 배경 위에 파란색으로 주요 행동을 강조한다.
- 공통 Header, GNB, Mega Menu, Footer의 구조와 상태 표현을 일관되게 유지한다.
- 카드·버튼의 둥근 모서리, 여백, hover/focus 전환을 기존 컴포넌트와 맞춘다.
- 링크와 버튼에 명확한 텍스트를 제공하고 키보드 focus-visible 상태를 유지한다.
- 내부 페이지 이동은 프로젝트 내부 상대 경로를 사용한다.
- 모바일에서 콘텐츠 순서와 조작 가능성을 확인한다.

### Don't
- 메인페이지의 현재 디자인·레이아웃을 임의로 변경하지 않는다.
- 코드에 없는 브랜드 컬러, 폰트, 고정 수치를 근거 없이 새로 정의하지 않는다.
- 서브페이지마다 헤더·버튼·카드 스타일을 제각각 만들지 않는다.
- 새 서브페이지 링크를 기존 귀뚜라미 공식 사이트로 연결하지 않는다.
- hover 상태만 제공하고 키보드 focus 상태를 누락하지 않는다.
- 작은 화면에서도 데스크톱의 다열 레이아웃과 고정 너비를 그대로 유지하지 않는다.
- CSS 변수로 관리되는 색상을 불필요하게 직접 색상 코드로 중복 작성하지 않는다.

---

## Source Files

이 문서의 기준이 된 프로젝트 파일:
- `Kiturami/index.html`
- `Kiturami/css/main.css`
- `Kiturami/css/product.css`
- `Kiturami/css/trouble.css`
- `Kiturami/css/pr.css`
- `Kiturami/css/cc.css`
- `Kiturami/css/footer.css`
- `css/default.css`
- `font/css/pretendardvariable.css`

**주의:** `firstClass` 저장소의 루트 `index.html`은 프로젝트별 페이지로 이동하는 링크 목록이며, 귀뚜라미 리뉴얼 메인페이지는 `Kiturami/index.html`이다. 따라서 이 문서는 사용자가 요청한 저장소 최상위 경로 `Design.md`에 두되, 디자인 분석은 `Kiturami` 프로젝트를 기준으로 했다.
