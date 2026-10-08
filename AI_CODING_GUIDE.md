# AI_CODING_GUIDE.md

# 버거킹 로그인 UI 기반 AI 코딩 가이드

## 1. 목적

이 저장소의 기존 버거킹 로그인 UI 구조와 스타일을 기준으로 새로운 브랜드의 로그인 화면을 제작한다.

핵심 원칙은 **기존 구조와 코딩 방식을 유지하면서 브랜드에 필요한 부분만 변경하는 것**이다.

새 화면을 만들 때 처음부터 새로운 구조나 프레임워크를 도입하지 않는다.

---

## 2. 현재 저장소 구조

현재 로그인 UI와 관련된 주요 파일은 다음과 같다.

```text
firstClass/
├─ css/
│  └─ default.css
├─ font/
│  ├─ BKBulMatPro-Bold.woff
│  ├─ PretendardVariable.woff2
│  ├─ SDGothicNeoRound-eMd.woff
│  ├─ SDGothicNeoRound-gBd.woff
│  ├─ SDGothicNeoRound-hEb.woff
│  └─ css/
│     ├─ bkbulmatpro.css
│     ├─ pretendardvariable.css
│     └─ sdgothicneo.css
├─ king/
│  ├─ login.html
│  ├─ password_reset.html
│  ├─ password_reset2.html
│  └─ img/
│     ├─ apple_logo_icon.svg
│     ├─ back_icon.svg
│     ├─ buger_img.svg
│     ├─ cancle_icon.svg
│     ├─ check_large_inactive.svg
│     ├─ check_large_on.svg
│     ├─ check_small_icon.svg
│     ├─ checkbox_active.svg
│     ├─ checkbox_disabled.svg
│     ├─ close_icon.svg
│     ├─ eye_icon.svg
│     ├─ kakao_logo_icon.svg
│     ├─ naver_logo_icon.svg
│     ├─ right_icon.svg
│     └─ samsung_logo_icon.svg
└─ index.html
```

새 브랜드 화면을 추가할 때도 현재 폴더 구조와 파일 연결 방식을 우선적으로 따른다.

---

## 3. HTML 기본 구조

현재 `king/login.html`의 기본 구조는 다음 흐름을 가진다.

```html
<body>
    <div id="wrap">
        <header>
            <h1>로그인</h1>
            <button class="prev_btn">
                <span class="sr-only">이전버튼</span>
            </button>
        </header>

        <main>
            <h2 class="title">
                <span>안녕하세요:)</span>
                <span>버거킹입니다</span>
            </h2>

            <form>
                <fieldset>
                    <legend class="sr-only">로그인화면</legend>

                    <label>이메일 로그인</label>

                    <div class="input_box">
                        <input type="email">
                    </div>

                    <div class="input_box password_box">
                        <input type="password">
                        <button type="button" class="pw_btn">
                            <span class="sr-only">비밀번호 보기</span>
                        </button>
                    </div>

                    <div class="login_option">
                        <label>
                            <input type="checkbox" class="check sr-only">
                            <span>자동로그인</span>
                        </label>

                        <label>
                            <input type="checkbox" class="check sr-only">
                            <span>아이디 저장</span>
                        </label>
                    </div>

                    <button type="submit" class="login_btn">
                        로그인
                    </button>
                </fieldset>
            </form>

            <div class="login_link">
                <a href="#">아이디 찾기</a>
                <a href="#">비밀번호 재설정</a>
                <a href="#">회원가입</a>
            </div>

            <div class="sns_login">
                <p>SNS으로 간편하게 로그인</p>

                <div class="sns_list">
                    <a href="#">
                        <span class="sr-only">카카오로그인</span>
                    </a>
                    <a href="#">
                        <span class="sr-only">네이버로그인</span>
                    </a>
                    <a href="#">
                        <span class="sr-only">애플로그인</span>
                    </a>
                    <a href="#">
                        <span class="sr-only">삼성카드로그인</span>
                    </a>
                </div>
            </div>
        </main>
    </div>
</body>
```

새 브랜드 화면에서도 이 구조를 기본으로 사용하고, 실제 화면에 필요한 요소만 추가하거나 제거한다.

---

## 4. HTML 작성 원칙

### 4-1. `lang` 설정

현재 문서는 한국어 페이지이므로 다음과 같이 사용한다.

```html
<html lang="ko">
```

새 브랜드 화면도 한국어 페이지라면 동일하게 유지한다.

### 4-2. `#wrap`

전체 화면을 감싸는 영역으로 사용한다.

현재 구조에서는 다음과 같이 사용한다.

```html
<div id="wrap">
    ...
</div>
```

새 화면에서도 전체 콘텐츠 영역을 관리하는 기본 컨테이너로 유지한다.

### 4-3. `header`

로그인 페이지의 상단 영역이다.

현재 구조에서는 다음 요소가 들어간다.

- 이전 버튼
- 페이지 제목 `h1`

### 4-4. `main`

로그인 페이지의 실제 주요 콘텐츠를 담는다.

현재 구조에서는 다음 내용을 포함한다.

- 인사말/브랜드 타이틀
- 로그인 폼
- 계정 관련 링크
- SNS 로그인 영역

### 4-5. `h1`, `h2`

현재 로그인 페이지에서는:

- `h1`: 로그인
- `h2`: 인사말 + 브랜드명

형태로 사용한다.

새 브랜드에서도 페이지의 정보 구조가 같다면 이 계층을 유지한다.

### 4-6. `form`, `fieldset`, `legend`

로그인 입력 영역은 현재 `form` 안에 `fieldset`을 사용한다.

`legend`는 화면에 직접 보이지 않도록 `sr-only`를 사용한다.

```html
<form>
    <fieldset>
        <legend class="sr-only">로그인화면</legend>
        ...
    </fieldset>
</form>
```

새 화면에서도 로그인 입력을 하나의 폼 영역으로 유지한다.

### 4-7. `label`과 `input`

현재 로그인 화면에서는 이메일과 비밀번호 입력에 `input`을 사용한다.

새 화면에서도 입력 목적에 맞는 `input` 타입을 사용한다.

예:

```html
<input type="email">
<input type="password">
<input type="checkbox">
```

### 4-8. 비밀번호 보기 버튼

현재 화면에서는 비밀번호 입력 영역 안에 별도의 버튼을 배치한다.

```html
<div class="input_box password_box">
    <input type="password">

    <button type="button" class="pw_btn">
        <span class="sr-only">비밀번호 보기</span>
    </button>
</div>
```

아이콘은 CSS의 background 이미지로 연결한다.

### 4-9. 체크박스

현재 체크박스는 실제 `input`을 화면에서 숨기고 `span`의 가상 요소에 아이콘을 적용한다.

```html
<label>
    <input type="checkbox" class="check sr-only">
    <span>자동로그인</span>
</label>
```

이 구조를 유지하면 새로운 브랜드에서도 기존 체크박스 스타일 구조를 재사용할 수 있다.

### 4-10. SNS 로그인

현재 SNS 로그인은 여러 개의 `a` 요소를 `.sns_list` 안에 배치한다.

각 아이콘은 CSS에서 background-image로 지정한다.

새 브랜드에서 SNS 종류가 달라질 경우 HTML의 링크 개수와 아이콘 이미지만 변경하는 방식으로 대응한다.

---

## 5. CSS 기본 구조

현재 `king/login.html`에는 로그인 화면 전용 CSS가 `<style>` 내부에 작성되어 있다.

공통 초기화와 접근성 관련 스타일은 다음 파일을 사용한다.

```text
css/default.css
```

새 화면을 만들 때도 현재 프로젝트의 CSS 연결 방식을 우선적으로 유지한다.

---

## 6. CSS 변수

현재 로그인 페이지는 `:root`에서 주요 색상과 폰트를 변수로 관리한다.

예:

```css
:root {
    --font: "Sandoll GothicNeoRound", sans-serif;
    --font-Pre: "Pretendard Variable", sans-serif;
    --font-BKR: "BKR", sans-serif;

    --primary: #512314;
    --disabledBg: #DDCDBE;
    --focus: #D62302;
    --baseBorder: #D9CFC6;
    --baseBg: #FFFCF9;
    --button: #E9DDCD;
    --errorColor: #C54734;
    --placeholder: #EBE6E2;
    --text: #766053;
    --bg: #f4ebdc;
}
```

새 브랜드를 만들 때도 색상값을 여기에서 변수로 관리하는 방식을 우선적으로 유지한다.

브랜드가 바뀌면 브랜드 색상에 맞게 변수값을 변경하고, 여러 선택자에 같은 색상을 직접 반복해서 작성하지 않는다.

---

## 7. 폰트

현재 저장소에는 다음 폰트 관련 파일이 있다.

- BKBulMatPro-Bold
- Pretendard Variable
- SDGothicNeoRound

현재 로그인 화면에서는 CSS 변수로 폰트를 연결한다.

```css
--font: "Sandoll GothicNeoRound", sans-serif;
--font-Pre: "Pretendard Variable", sans-serif;
--font-BKR: "BKR", sans-serif;
```

새 브랜드에서 별도의 폰트를 사용한다면 현재 저장소의 폰트 연결 방식을 참고해 적용한다.

단, 기존 폰트를 무조건 제거하거나 새로운 폰트 시스템으로 전체 구조를 바꾸지 않는다.

---

## 8. 배경과 레이아웃

현재 로그인 화면의 전체 영역은 다음과 같이 구성되어 있다.

```css
#wrap {
    width: 100%;
    max-width: 1024px;
    min-width: 360px;
    margin: 0 auto;
    background-color: var(--bg);
}
```

현재 화면의 기본 방향은:

- 전체 너비 사용
- 최대 너비 제한
- 최소 너비 설정
- 가운데 정렬
- 브랜드 배경색 사용

이다.

새 브랜드 화면에서도 화면 크기에 따라 레이아웃이 깨지지 않도록 이 방식을 기본으로 사용한다.

---

## 9. 입력창 스타일

현재 입력창은 공통 스타일과 타입별 선택자를 사용한다.

주요 스타일:

- 테두리
- 배경색
- 둥근 모서리
- 좌우 내부 여백
- 전체 너비 사용

현재 구조:

```css
input[type="email"],
input[type="password"] {
    width: 100%;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
}
```

새 브랜드에서도 화면의 입력창 크기와 형태가 크게 다르지 않다면 이 구조를 기준으로 수정한다.

---

## 10. 로그인 버튼

현재 로그인 버튼은 `.login_btn`으로 관리한다.

기본 구조:

```css
.login_btn {
    width: 100%;
    height: 50px;
    border-radius: 22px;
    font-family: inherit;
    font-size: inherit;
    color: var(--placeholder);
    background-color: var(--primary);
    border: none;
}
```

새 브랜드에서는 주로 다음 값을 브랜드에 맞게 변경한다.

- 배경색
- 글자색
- 모서리 둥글기
- 버튼 높이
- 투명도/상태 표현

버튼의 역할과 HTML 구조는 기존 구조를 우선 유지한다.

---

## 11. 계정 관련 링크

현재 로그인 페이지에서는 다음 링크를 하나의 영역으로 묶는다.

```html
<div class="login_link">
    <a href="#">아이디 찾기</a>
    <a href="#">비밀번호 재설정</a>
    <a href="#">회원가입</a>
</div>
```

링크 사이의 구분선은 CSS의 `::after`를 사용한다.

새 브랜드에서도 링크의 종류가 같다면 HTML 구조를 유지하고 디자인 값만 변경한다.

---

## 12. SNS 로그인 영역

현재 SNS 로그인 영역은:

```text
.sns_login
└─ 안내 문구
└─ .sns_list
   ├─ SNS 링크
   ├─ SNS 링크
   ├─ SNS 링크
   └─ SNS 링크
```

형태이다.

아이콘은 다음과 같은 방식으로 연결한다.

```css
.sns_list > a:nth-child(1) {
    background-image: url(img/kakao_logo_icon.svg);
}
```

새 브랜드에서 SNS 종류가 변경될 경우:

1. HTML의 링크 개수를 확인한다.
2. 이미지 파일을 준비한다.
3. 기존 `.sns_list` 구조를 유지한다.
4. 필요한 background-image만 변경한다.

---

## 13. 이미지와 아이콘

현재 로그인 페이지는 SVG 아이콘을 `img` 태그보다 CSS background 이미지로 사용하는 경우가 있다.

예:

```css
.prev_btn {
    background: transparent url(img/back_icon.svg) no-repeat center / auto;
}

.pw_btn {
    background: url(img/eye_icon.svg) no-repeat center / auto;
}
```

새 브랜드에서도 동일한 방식의 아이콘을 사용한다면 기존 구조를 유지한다.

이미지 경로는 HTML 파일의 위치를 기준으로 확인한다.

예:

```text
king/login.html
king/img/icon.svg
```

이면:

```css
url(img/icon.svg)
```

형태로 연결한다.

---

## 14. 접근성

현재 프로젝트의 `default.css`에는 `.sr-only`가 정의되어 있다.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```

화면에서는 보이지 않지만 스크린 리더가 읽어야 하는 텍스트에 사용한다.

현재 예:

```html
<span class="sr-only">비밀번호 보기</span>
```

새 화면에서도 아이콘만 보이는 버튼이나 링크에는 의미를 전달할 수 있는 텍스트를 넣고 `sr-only`를 활용한다.

---

## 15. 반응형

현재 `#wrap`에는 최소 너비와 최대 너비가 설정되어 있다.

```css
max-width: 1024px;
min-width: 360px;
```

새 화면을 만들 때도 모바일과 큰 화면에서 콘텐츠가 지나치게 커지거나 잘리지 않는지 확인한다.

특히 다음 요소를 확인한다.

- 입력창
- 로그인 버튼
- SNS 아이콘
- 상단 버튼
- 좌우 여백
- 제목 크기
- 링크 영역

---

## 16. 새 브랜드 화면을 만들 때 유지할 것

다음 구조는 우선 유지한다.

### HTML

- `#wrap`
- `header`
- `h1`
- `main`
- `h2.title`
- `form`
- `fieldset`
- `legend.sr-only`
- 입력창 구조
- `.password_box`
- `.login_option`
- `.login_btn`
- `.login_link`
- `.sns_login`
- `.sns_list`

### CSS

- `:root` 변수 관리
- 기존 CSS 선택자 구조
- `default.css` 사용
- 폰트 파일 연결 방식
- SVG background-image 방식
- `.sr-only`
- `#wrap`의 기본 레이아웃
- 기존의 반응형 방향

---

## 17. 새 브랜드에서 변경할 것

브랜드에 따라 다음 항목을 변경한다.

### 브랜드 컬러

```css
:root {
    --primary: ...;
    --bg: ...;
}
```

### 폰트

브랜드에서 필요한 폰트가 있다면 기존 폰트 연결 방식을 기준으로 변경한다.

### 문구

예:

```html
<h2 class="title">
    <span>안녕하세요:)</span>
    <span>버거킹입니다</span>
</h2>
```

여기에서 브랜드에 맞는 문구로 변경한다.

### 아이콘

- 뒤로가기
- 비밀번호 보기
- 체크박스
- SNS 로그인 아이콘

등을 새 브랜드의 이미지 파일로 교체한다.

### SNS

브랜드 화면에 필요한 로그인 방식에 맞게 링크와 아이콘을 변경한다.

### 버튼

브랜드 디자인에 맞게 색상, 크기, radius 등을 조정한다.

---

## 18. AI가 새 화면을 만들 때 작업 순서

새 로그인 화면을 요청받으면 다음 순서로 작업한다.

### STEP 1. 기존 코드 확인

먼저 `king/login.html`과 `css/default.css`의 구조를 확인한다.

### STEP 2. 재사용할 구조 확인

기존 로그인 화면에서 그대로 사용할 수 있는 HTML 구조를 찾는다.

### STEP 3. 브랜드 차이 확인

새 브랜드의 디자인에서 변경해야 하는 요소를 찾는다.

- 색상
- 폰트
- 문구
- 아이콘
- 입력창
- 버튼
- SNS
- 여백
- 크기

### STEP 4. HTML 수정

기존 구조를 유지하면서 브랜드에 필요한 콘텐츠만 변경한다.

### STEP 5. CSS 수정

기존 선택자를 우선 재사용한다.

필요한 경우에만 새로운 선택자를 추가한다.

### STEP 6. 이미지 연결

새 브랜드의 SVG/이미지를 기존 이미지 연결 방식에 맞게 연결한다.

### STEP 7. 반응형 확인

360px 정도의 작은 화면부터 큰 화면까지 레이아웃이 깨지는지 확인한다.

### STEP 8. 코드 점검

다음 항목을 확인한다.

- HTML 구조
- CSS 선택자
- 이미지 경로
- 폰트 경로
- 입력창 크기
- 버튼 크기
- 링크
- 접근성 텍스트
- 반응형

---

## 19. 현재 코드에서 확인해야 할 주의점

현재 `king/login.html`에는 작업 과정에서 정리할 수 있는 코드가 일부 있다.

### 19-1. 중복 CSS

`.login_btn`이 두 번 선언되어 있다.

새 화면을 만들 때 동일한 선택자를 불필요하게 반복하지 않는다.

### 19-2. 선택자 작성

현재 코드에는 다음과 같은 부분이 있다.

```css
input[type="email"]
input[type="password"] {
    ...
}
```

두 선택자를 함께 적용하려는 목적이라면 쉼표가 필요하다.

```css
input[type="email"],
input[type="password"] {
    ...
}
```

### 19-3. 잘못된 padding 값

현재 코드에:

```css
padding: 0 -20px;
```

가 있다.

음수 padding은 사용할 수 없으므로 실제 적용을 확인하고 필요한 경우 좌우 padding을 각각 지정한다.

### 19-4. background-image 문법

현재 코드에는:

```css
background-image: url(img/checkbox_active.svg);no-repeat center / contain;
```

와 같은 문법이 있다.

`background-image`와 `background-repeat`, `background-position`, `background-size`는 각각 작성하거나 `background` 단축 속성을 사용해야 한다.

### 19-5. label과 input 연결

현재 코드의 이메일 label과 input은 `for`와 `id` 연결이 완성되어 있지 않다.

새 화면을 만들 때 label과 입력 요소의 관계가 필요한 경우 연결 상태를 확인한다.

### 19-6. placeholder 링크

현재 `href="#"`는 실제 페이지 이동 주소가 아니다.

실제 기능을 연결할 단계에서는 실제 경로로 변경해야 한다.

---

## 20. AI가 피해야 할 것

새 브랜드 화면을 만든다고 해서 다음과 같이 작업하지 않는다.

### 피해야 할 것 1

기존 HTML 구조를 전부 삭제하고 처음부터 새로 만든다.

### 피해야 할 것 2

기존 CSS를 전부 삭제하고 새로운 CSS 시스템으로 바꾼다.

### 피해야 할 것 3

현재 프로젝트에서 사용하지 않는 프레임워크를 갑자기 도입한다.

예:

- React
- Vue
- Tailwind CSS
- Bootstrap

등을 기존 구조를 대체하는 목적으로 사용하지 않는다.

### 피해야 할 것 4

브랜드 디자인과 관계없는 복잡한 JavaScript를 추가한다.

### 피해야 할 것 5

기존 프로젝트의 폰트, 이미지 경로, 파일 구조를 무시한다.

---

## 21. 코드 리뷰 기준

AI가 코드를 검토할 때는 다음 순서로 확인한다.

1. 현재 코드에서 잘 작성된 부분
2. 다시 생각해볼 부분
3. 왜 문제가 되는지
4. 필요한 경우 수정 코드

단순히 코드를 전부 새로 작성하지 않는다.

---

## 22. 새 화면 제작 체크리스트

### HTML

- [ ] `lang="ko"` 확인
- [ ] `#wrap` 사용
- [ ] `header` 구조 확인
- [ ] `h1` 제목 확인
- [ ] `main` 구조 확인
- [ ] `h2.title` 확인
- [ ] `form` 구조 확인
- [ ] `fieldset` / `legend` 확인
- [ ] 입력 요소 확인
- [ ] 비밀번호 버튼 확인
- [ ] 체크박스 확인
- [ ] 로그인 버튼 확인
- [ ] 계정 링크 확인
- [ ] SNS 영역 확인
- [ ] 아이콘에 접근성 텍스트가 있는지 확인

### CSS

- [ ] `:root` 변수 확인
- [ ] 브랜드 컬러 변경
- [ ] 폰트 확인
- [ ] 배경색 확인
- [ ] 입력창 확인
- [ ] 버튼 확인
- [ ] 링크 확인
- [ ] SNS 아이콘 확인
- [ ] 이미지 경로 확인
- [ ] 중복 CSS 확인
- [ ] 잘못된 CSS 문법 확인
- [ ] 반응형 확인

### 최종

- [ ] 기존 구조를 불필요하게 바꾸지 않았는가?
- [ ] 기존 파일 경로와 연결 방식이 맞는가?
- [ ] 새 브랜드에 필요한 부분만 변경했는가?
- [ ] 실제 화면과 비교했는가?
- [ ] 작은 화면에서 레이아웃이 깨지지 않는가?


---

## 23. 비밀번호 재설정 화면

현재 버거킹 UI에는 로그인 화면 외에 비밀번호 재설정 화면이 추가되어 있다.

관련 파일:

```text
king/
├─ login.html
├─ password_reset.html
└─ password_reset2.html
```

### 23-1. 재설정 1

`password_reset.html`은 비밀번호 입력 전/검사 상태를 기준으로 만든 화면이다.

주요 구조:

- `header`
- 페이지 제목 `h1`
- 닫기 버튼
- 안내 제목 `h2`
- 새로운 비밀번호 입력창
- 비밀번호 확인 입력창
- 비밀번호 조건 안내
- 주의 문구
- SNS 비밀번호 재설정 안내
- 완료 버튼

비밀번호 입력창에는 기존 로그인 화면에서 사용하던 비밀번호 입력 구조와 `eye_icon.svg`를 재사용한다.

### 23-2. 재설정 2

`password_reset2.html`은 조건을 충족한 상태의 화면이다.

재설정 1과 기본 HTML 구조와 스타일 방향을 공유하지만 다음 상태를 보여준다.

- 비밀번호 입력값이 입력된 상태
- 비밀번호 조건이 충족된 상태
- 조건 항목이 체크된 상태
- 완료 버튼이 활성화된 상태

따라서 재설정 1과 2는 별도의 HTML 문서로 관리하며, `index.html`에서 각각 연결한다.

```html
<a href="king/password_reset.html">버거킹 비밀번호 재설정 UI - 1</a>
<a href="king/password_reset2.html">버거킹 비밀번호 재설정 UI - 2</a>
```

### 23-3. 비밀번호 재설정 타이포그래피

재설정 화면의 안내 제목은 두 줄의 크기를 다르게 사용한다.

```html
<h2 id="reset-title">
    <span>새로운 비밀번호를</span><br>
    <strong>입력해 주세요.</strong>
</h2>
```

현재 기준:

- `새로운 비밀번호를`: **18px**
- `입력해 주세요.`: **24px**

따라서 한 개의 `font-size`로 두 문장을 처리하지 않고, `span`과 `strong`을 나누어 각각 크기를 지정한다.

### 23-4. 완료 버튼 폰트

완료 버튼은 프로젝트에서 사용하는 `Sandoll GothicNeoRound` 폰트를 사용한다.

```css
.complete_btn {
    font-family: var(--font);
}
```

여기서 `--font`는 현재 다음과 같이 정의되어 있다.

```css
--font: "Sandoll GothicNeoRound", sans-serif;
```

재설정 1과 재설정 2 모두 같은 기준을 유지한다.

### 23-5. 기존 구조 재사용 원칙

비밀번호 재설정 화면을 만들 때도 로그인 화면의 구조와 스타일을 최대한 재사용한다.

재사용 대상:

- `#wrap`
- `header`
- `h1`
- `main`
- `form`
- `fieldset`
- `legend.sr-only`
- `.password_box`
- `.pw_btn`
- `eye_icon.svg`
- 기존 폰트 연결
- `default.css`
- `:root` 색상 변수

화면 상태가 다르더라도 기존 로그인 UI와 공통되는 부분을 새롭게 중복 작성하지 않는다.
