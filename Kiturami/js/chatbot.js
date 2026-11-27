// 챗봇 상담 (미리 준비된 안내) - 모든 링크는 이 사이트 안의 페이지 또는 전화로만 연결합니다.
(() => {
    const TOPICS = [
        { id: "heating", chip: "난방이 안 돼요", words: ["난방", "따뜻", "차가", "춥"], text: "난방이 되지 않을 때는 전원과 운전 모드, 설정온도, 연료(가스 밸브·기름 잔량), 난방 분배기 밸브를 차례로 확인해 보세요.", link: ["난방 자가진단 보기", "symptom.html?type=heating"] },
        { id: "hotwater", chip: "온수가 안 나와요", words: ["온수", "뜨거운", "미지근"], text: "온수 설정과 수도(급수) 밸브, 연료 상태를 확인해 보세요. 수도꼭지 거름망이 막혀도 온수가 약해질 수 있어요.", link: ["온수 자가진단 보기", "symptom.html?type=hotwater"] },
        { id: "error", chip: "에러코드가 떠요", words: ["에러", "오류", "코드", "에러코드"], text: "표시된 코드와 모델명을 메모해 두세요. 코드 의미는 모델마다 달라서 고객센터에 코드와 모델명을 알려 주시면 정확히 안내받을 수 있어요.", link: ["에러코드 안내 보기", "symptom.html?type=errorcode"] },
        { id: "noise", chip: "소음이 심해요", words: ["소음", "소리", "시끄", "웅"], text: "물 흐르는 소리, 딱딱하는 소리 등 소리의 종류에 따라 원인이 달라요. 큰 소리나 연기, 타는 냄새가 나면 사용을 멈추고 바로 연락해 주세요.", link: ["소음 자가진단 보기", "symptom.html?type=noise"] },
        { id: "leak", chip: "물이 새요", words: ["누수", "새요", "물이 새", "물샘"], text: "보일러 전원을 차단하고 급수 밸브를 잠근 뒤 새는 위치를 사진으로 남겨 주세요. 가스 냄새가 나면 밸브를 잠그고 환기한 뒤 도시가스사나 119에 먼저 연락하세요.", link: ["누수 대처 보기", "symptom.html?type=leak"] },
        { id: "controller", chip: "조절기가 이상해요", words: ["조절기", "리모컨", "화면", "건전지"], text: "건전지, 키 잠금, 운전 모드를 확인하고 보일러 전원을 껐다 켜 보세요. Wifi 모델은 공유기 연결도 확인해 주세요.", link: ["조절기 자가진단 보기", "symptom.html?type=controller"] },
        { id: "as", chip: "A/S를 신청하고 싶어요", words: ["a/s", "as", "수리", "점검", "방문", "기사"], text: "전문 점검이 필요하면 A/S 신청 화면에서 문의 내용을 작성해 보세요. 전화 접수는 1588-9000이에요.", link: ["A/S 신청하기", "as-request.html"] },
        { id: "center", chip: "서비스센터를 찾고 싶어요", words: ["센터", "대리점", "가까운", "지점"], text: "지역별 서비스센터와 영업대리점 안내를 확인할 수 있어요.", link: ["서비스센터 찾기", "service-center.html"] },
        { id: "manual", chip: "사용설명서가 필요해요", words: ["설명서", "사용법", "사용 방법", "매뉴얼"], text: "기본 사용 방법과 조절기, 겨울철 관리 안내를 정리해 두었어요.", link: ["제품 사용 안내 보기", "usage-guide.html#operation"] },
        { id: "safety", chip: "안전 주의사항", words: ["안전", "주의", "가스 냄새", "위험"], text: "가스 냄새가 나면 불꽃과 전기 스위치를 조작하지 말고 안전한 곳으로 이동한 뒤 전문기관의 안내를 따르세요.", link: ["안전 주의사항 보기", "usage-guide.html#safety"] }
    ];
    const log = document.getElementById("chat-log");
    const chips = document.getElementById("chat-chips");
    const form = document.getElementById("chat-form");
    const input = document.getElementById("chat-input");

    const add = (who, text, link) => {
        const row = document.createElement("div");
        row.className = "ct-msg ct-msg--" + who;
        const bubble = document.createElement("div");
        bubble.className = "ct-bubble";
        bubble.textContent = text;
        if (link) {
            const a = document.createElement("a");
            a.href = link[1];
            a.textContent = link[0] + " ↗";
            bubble.append(document.createElement("br"), a);
        }
        row.appendChild(bubble);
        log.appendChild(row);
        log.scrollTop = log.scrollHeight;
    };
    const fallback = () => add("bot", "해당 내용은 바로 안내해 드리기 어려워요. 아래 방법으로 문의해 주세요.\n전화 1588-9000 (연중무휴 24시간)", ["1:1 문의 남기기", "inquiry.html"]);
    const answer = (topic) => topic ? add("bot", topic.text, topic.link) : fallback();
    const find = (query) => {
        const q = query.toLowerCase().replace(/\s+/g, "");
        return TOPICS.find((t) => t.words.some((w) => q.includes(w.toLowerCase().replace(/\s+/g, ""))));
    };
    const ask = (text, topic) => {
        add("user", text);
        setTimeout(() => answer(topic || find(text)), 350);
    };

    TOPICS.forEach((topic) => {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = topic.chip;
        b.addEventListener("click", () => ask(topic.chip, topic));
        chips.appendChild(b);
    });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        ask(text);
    });
    add("bot", "안녕하세요, 귀뚜라미 상담 도우미예요. 불편한 증상을 아래에서 고르거나 직접 입력해 주세요.");
})();
