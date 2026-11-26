// 고객센터 > 증상별 자가진단 안내 (symptom.html?type=heating 등)
// 증상별 확인 항목은 일반적인 보일러 점검 안내입니다. 모델별 에러코드·조치는 공식 자가진단 매뉴얼(krb.co.kr/self)을 확인하세요.
(() => {
    const SYMPTOMS = {
        heating: {
            name: "난방이 안 돼요",
            lead: "난방이 되지 않을 때 집에서 먼저 확인해 볼 수 있는 항목입니다. 위에서부터 차례로 확인해 보세요.",
            steps: [
                ["전원과 운전 모드를 확인하세요", "보일러 전원 플러그가 꽂혀 있는지, 조절기 화면이 켜져 있는지 확인하세요. 운전 모드가 '난방'이 아니라 '외출'이나 '예약'으로 되어 있으면 난방이 작동하지 않을 수 있습니다."],
                ["설정온도를 높여 보세요", "설정온도가 현재 실내온도보다 낮으면 난방이 시작되지 않습니다. 설정온도를 실내온도보다 높게 맞춘 뒤 잠시 기다려 보세요."],
                ["연료를 확인하세요", "가스보일러는 가스 중간밸브가 열려 있는지, 기름보일러는 기름 탱크에 기름이 충분히 남아 있는지 확인하세요."],
                ["난방 분배기 밸브를 확인하세요", "난방 분배기의 방별 밸브가 열려 있는지 확인하세요. 한동안 사용하지 않았다면 배관 속 공기를 빼야 할 수 있으니, 사용 중인 모델의 자가진단 매뉴얼을 참고하세요."],
                ["한파에는 동파 여부를 확인하세요", "기온이 크게 떨어지면 배관이 얼어 작동이 멈출 수 있습니다. 얼어 있는 배관을 끓는 물이나 불로 녹이지 말고, 미지근한 물수건으로 감싸 서서히 녹이세요."]
            ],
            after: "위 항목을 확인해도 난방이 되지 않거나 표시창에 에러코드가 나타나면 고객센터로 문의해 주세요."
        },
        hotwater: {
            name: "온수가 안 나와요",
            lead: "온수가 나오지 않거나 미지근할 때 먼저 확인해 볼 수 있는 항목입니다.",
            steps: [
                ["온수 설정을 확인하세요", "조절기에서 온수 모드와 온수 설정온도를 확인하세요. 설정온도가 낮거나 온수 기능이 꺼져 있으면 따뜻한 물이 나오지 않습니다."],
                ["수도 밸브와 단수 여부를 확인하세요", "보일러로 들어가는 급수(수도) 밸브가 열려 있는지, 집 전체에 단수가 되지는 않았는지 확인하세요."],
                ["연료를 확인하세요", "가스보일러는 가스 중간밸브가 열려 있는지, 기름보일러는 기름 잔량이 충분한지 확인하세요."],
                ["물이 약하게 나온다면 수도꼭지를 확인하세요", "수도꼭지 끝의 거름망에 이물질이 끼면 물이 약하게 나와 보일러가 작동하지 않을 수 있습니다. 거름망을 분리해 청소해 보세요."],
                ["한파에는 온수 배관 동결을 확인하세요", "추운 날씨에 온수 배관이 얼면 온수가 나오지 않습니다. 끓는 물이나 불을 쓰지 말고 미지근한 물수건으로 감싸 서서히 녹이세요."]
            ],
            after: "위 항목을 확인해도 온수가 나오지 않거나 표시창에 에러코드가 나타나면 고객센터로 문의해 주세요."
        },
        errorcode: {
            name: "에러코드가 떠요",
            lead: "에러코드의 의미와 조치 방법은 제품마다 다릅니다. 아래 순서로 확인한 뒤, 사용 중인 모델의 공식 매뉴얼에서 코드 의미를 찾아보세요.",
            steps: [
                ["표시된 코드와 모델명을 확인하세요", "조절기와 보일러 본체 표시창에 나온 코드를 메모하거나 사진으로 남기세요. 모델명은 보일러 본체의 제품 라벨에서 확인할 수 있습니다."],
                ["전원을 한 번만 껐다 켜 보세요", "보일러 전원을 끄고 잠시 기다린 뒤 다시 켜세요. 일시적인 오류라면 해제될 수 있습니다. 반복해서 껐다 켜지는 마세요."],
                ["공식 매뉴얼에서 코드 의미를 확인하세요", "에러코드는 모델마다 의미가 다릅니다. 오른쪽의 제품별 자가진단 매뉴얼에서 사용 중인 모델을 찾아 코드별 조치 방법을 확인하세요."],
                ["같은 코드가 반복되면 점검을 받으세요", "다시 켜도 같은 코드가 나타나면 임의로 분해하지 말고 고객센터에 코드와 모델명을 알려 주세요. 더 빠르게 안내받을 수 있습니다."]
            ],
            after: "코드가 반복되거나 가스 냄새, 타는 냄새가 나면 사용을 멈추고 고객센터로 문의해 주세요."
        },
        noise: {
            name: "소음이 심해요",
            lead: "소리의 종류에 따라 원인이 다릅니다. 어떤 소리인지 먼저 구분해 보세요.",
            steps: [
                ["어떤 소리인지 구분해 보세요", "'보글보글', '졸졸' 하는 물소리는 배관 속 공기가, '딱딱', '똑똑' 하는 소리는 난방이 시작되거나 멈출 때 배관이 늘어나고 줄어드는 소리일 수 있습니다."],
                ["배관 속 공기를 빼 보세요", "물 흐르는 소리가 계속 난다면 배관 속 공기가 원인일 수 있습니다. 사용 중인 모델의 자가진단 매뉴얼에서 공기 빼는 방법을 확인하세요."],
                ["주변 설치 상태를 눈으로 확인하세요", "보일러 주변 배관이나 배기통이 흔들리거나 부딪히고 있지는 않은지 확인하세요. 직접 만져 조정하지 말고 상태만 확인하세요."],
                ["윙·웅 소리가 계속되는지 확인하세요", "팬이나 순환펌프에서 나는 소리가 평소보다 크고 오래 지속되면 부품 점검이 필요할 수 있습니다."]
            ],
            alert: ["즉시 사용을 멈추세요", "'펑', '쿵' 하는 큰 소리가 나거나 연기, 타는 냄새가 나면 보일러 사용을 멈추고 바로 고객센터로 연락하세요."],
            after: "소음이 계속되거나 평소와 다르게 커졌다면 점검을 받아 보세요."
        },
        leak: {
            name: "물이 새요",
            lead: "물이 새는 것을 발견하면 안전을 먼저 확보한 뒤 아래 순서로 조치하세요.",
            alert: ["가스 냄새가 나면 가장 먼저 이렇게 하세요", "가스 중간밸브를 잠그고 창문을 열어 환기하세요. 전기 스위치나 라이터는 사용하지 말고, 집 밖으로 나가 도시가스 회사나 119에 연락하세요."],
            steps: [
                ["보일러 전원을 차단하세요", "누수 부위에 물기가 있다면 보일러 본체를 만지지 말고, 분전반에서 해당 차단기를 내리세요. 물이 닿지 않은 상태라면 전원 플러그를 뽑아도 됩니다."],
                ["급수(수도) 밸브를 잠그세요", "보일러로 들어가는 수도 밸브를 잠가 더 이상 물이 새지 않게 하세요."],
                ["새는 위치를 확인하세요", "보일러 본체 아래, 배관 연결부, 난방 분배기, 수도꼭지 중 어디에서 새는지 확인하세요. 수건이나 대야로 물을 받아 두세요."],
                ["사진을 찍어 두세요", "누수 위치와 상태를 사진으로 남겨 두면 점검 시 도움이 됩니다. 임의로 분해하거나 수리하지 마세요."]
            ],
            after: "누수는 임의로 조치하기 어렵습니다. 위 조치 후 고객센터로 연락해 점검을 받으세요."
        },
        controller: {
            name: "조절기 이상",
            lead: "실내온도조절기(리모컨) 화면이 꺼지거나 버튼이 동작하지 않을 때 확인해 볼 수 있는 항목입니다.",
            steps: [
                ["건전지를 확인하세요", "건전지를 사용하는 조절기는 화면이 꺼지거나 깜빡이면 건전지를 새것으로 교체해 보세요. 건전지 사용 여부는 모델마다 다릅니다."],
                ["키 잠금과 설정을 확인하세요", "키 잠금 상태이거나 운전 모드, 설정온도가 의도와 다르게 바뀌어 있지는 않은지 확인하세요."],
                ["보일러 전원을 껐다 켜 보세요", "보일러 전원을 끄고 잠시 기다린 뒤 다시 켜 조절기가 정상적으로 켜지는지 확인하세요."],
                ["Wifi 조절기는 연결 상태를 확인하세요", "Wifi 모델은 공유기 전원과 인터넷 연결 상태를 확인하세요. 공유기를 다시 시작한 뒤 앱에서 연결을 확인해 보세요."],
                ["조절기 모델명을 확인하세요", "조절기 앞면이나 뒷면의 모델명을 확인하고, 오른쪽의 실내온도조절기 자가진단 매뉴얼에서 해당 모델의 안내를 확인하세요."]
            ],
            after: "위 항목을 확인해도 해결되지 않으면 모델명과 증상을 알려 주시고 고객센터로 문의해 주세요."
        }
    };

    // 제품군별 공식 자가진단 매뉴얼 (krb.co.kr/self 카테고리)
    const MANUALS = [
        ["가스보일러", "185"], ["기름보일러", "186"], ["온수기", "189"], ["실내온도조절기", "188"],
        ["시스템 제품", "8845"], ["난방매트", "17499"], ["신재생/중대형/전기", "187"]
    ];

    const params = new URLSearchParams(window.location.search);
    const type = SYMPTOMS[params.get("type")] ? params.get("type") : "heating";
    const data = SYMPTOMS[type];
    const keys = Object.keys(SYMPTOMS);
    const $ = (id) => document.getElementById(id);

    document.title = data.name + " | 증상별 자가진단 | 귀뚜라미";
    $("sym-crumb").textContent = data.name;
    $("sym-eyebrow").textContent = "SELF CHECK / " + String(keys.indexOf(type) + 1).padStart(2, "0");
    $("sym-title").textContent = data.name;
    $("sym-lead").textContent = data.lead;
    $("sym-after-text").textContent = data.after;

    if (data.alert) {
        const alertBox = $("sym-alert");
        const strong = document.createElement("strong");
        strong.textContent = data.alert[0];
        alertBox.append(strong, document.createTextNode(data.alert[1]));
        alertBox.hidden = false;
    }

    const steps = $("sym-steps");
    data.steps.forEach(([title, text]) => {
        const li = document.createElement("li");
        const body = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.textContent = title;
        const p = document.createElement("p");
        p.textContent = text;
        body.append(h3, p);
        li.appendChild(body);
        steps.appendChild(li);
    });

    const others = $("sym-others");
    keys.forEach((key, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "symptom.html?type=" + key;
        if (key === type) a.setAttribute("aria-current", "page");
        const name = document.createElement("span");
        name.textContent = SYMPTOMS[key].name;
        const num = document.createElement("span");
        num.textContent = String(index + 1).padStart(2, "0");
        a.append(name, num);
        li.appendChild(a);
        others.appendChild(li);
    });

    // 조절기 증상이면 실내온도조절기를 맨 앞에 둡니다.
    const manuals = type === "controller"
        ? [MANUALS[3], ...MANUALS.filter((m) => m[1] !== "188")]
        : MANUALS;
    const manualList = $("sym-manuals");
    manuals.forEach(([label, category]) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "https://krb.co.kr/index.php?mid=self&category=" + category;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = label;
        li.appendChild(a);
        manualList.appendChild(li);
    });
})();
