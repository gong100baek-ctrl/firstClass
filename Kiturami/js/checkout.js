(() => {
  const products = {
    "gas-boiler": ["가스보일러", "images/Kiturami02.png"],
    "oil-boiler": ["기름보일러", "images/Kiturami01.png"],
    "water-heater": ["온수기", "images/Kiturami03.png"],
    "renewable": ["신재생·중대형·전기", "images/Kiturami04.png"],
    "heating-mat": ["난방매트", "images/Kiturami05.png"],
    "system": ["시스템 제품", "images/Kiturami06.png"],
    "air-care": ["공기청정·환기", "images/Kiturami07.png"],
    "air-conditioner": ["에어컨", "images/Kiturami08.png"],
    "thermostat": ["실내온도조절기", "images/Kiturami09.png"],
    "etc": ["기타 제품", "images/Kiturami10.png"]
  };
  const params = new URLSearchParams(location.search);
  const key = products[params.get("category")] ? params.get("category") : "gas-boiler";
  const [catName, image] = products[key];
  // 카테고리별 제품(이름/이미지)은 js/product-data.js 에서 가져옵니다. 이미지가 없으면 카테고리 대표 이미지를 씁니다.
  const imgSrc = window.KITURAMI_IMG || ((path) => path);
  const lineup = (window.KITURAMI_LINEUPS || {})[key];
  const types = lineup ? lineup.items.map(([typeName, path]) => ({ name: typeName, image: path ? imgSrc(path) : image })) : [];
  const item = params.get("item");
  const chosen = types.find((t) => t.name === item);
  let name = chosen ? chosen.name : catName;
  if (!chosen && item) name = item.replace(/[^0-9A-Za-z가-힣 ·/]/g, "").slice(0, 30) || name;
  document.getElementById("co-name").textContent = name;
  const img = document.getElementById("co-image");
  img.referrerPolicy = "no-referrer";
  img.addEventListener("error", () => { if (img.getAttribute("src") !== image) img.src = image; });
  img.src = chosen ? chosen.image : image; img.alt = name + " 제품 이미지";
  document.title = name + " 주문/결제 | 귀뚜라미몰";

  const pick = document.getElementById("co-pick");
  const grid = document.getElementById("co-pick-grid");
  const form = document.getElementById("checkout-form");
  const change = document.getElementById("co-change");
    const showPick = () => { pick.hidden = false; form.hidden = true; document.querySelector(".checkout-heading p:last-child").textContent = "구매하실 종류를 먼저 선택해주세요."; };
  const showForm = (type) => {
    pick.hidden = true; form.hidden = false;
    document.querySelector(".checkout-heading p:last-child").textContent = "선택하신 제품의 주문 정보를 확인하고 결제를 진행해주세요.";
    if (type) {
      document.getElementById("co-name").textContent = type.name;
      img.src = type.image; img.alt = type.name + " 제품 이미지";
      document.title = type.name + " 주문/결제 | 귀뚜라미몰";
    }
    change.hidden = false;
  };
  {
    types.forEach((type) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "checkout-type";
      const t = document.createElement("img"); t.referrerPolicy = "no-referrer"; t.loading = "lazy"; t.addEventListener("error", () => { if (t.getAttribute("src") !== image) t.src = image; }); t.src = type.image; t.alt = "";
      const n = document.createElement("span"); n.textContent = type.name;
      b.append(t, n);
      b.addEventListener("click", () => { showForm(type); window.scrollTo({ top: 0, behavior: "smooth" }); });
      grid.appendChild(b);
    });
    change.addEventListener("click", () => { showPick(); window.scrollTo({ top: 0 }); });
    if (chosen) showForm(chosen); else showPick();
  }

  const result = document.getElementById("co-result");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("input[required]").forEach((input) => {
      const bad = input.type === "checkbox" ? !input.checked : !input.value.trim();
      input.setAttribute("aria-invalid", String(bad));
      if (bad && !firstInvalid) firstInvalid = input;
    });
    result.hidden = false;
    if (firstInvalid) {
      result.className = "checkout-result is-error";
      result.textContent = "필수 항목(이름, 연락처, 주소, 동의)을 확인해주세요.";
      firstInvalid.focus();
      return;
    }
    result.className = "checkout-result";
    result.textContent = "주문 정보가 확인되었습니다. 이 화면은 데모 페이지로, 실제 결제와 주문은 이루어지지 않았습니다.";
  });
})();
