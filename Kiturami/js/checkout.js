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
  let [name, image] = products[key];
  const item = params.get("item");
  if (item) name = item.replace(/[^0-9A-Za-z가-힣 ·/]/g, "").slice(0, 30) || name;
  document.getElementById("co-name").textContent = name;
  const img = document.getElementById("co-image");
  img.src = image; img.alt = name + " 제품 이미지";
  document.title = name + " 주문/결제 | 귀뚜라미몰";

  const form = document.getElementById("checkout-form");
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
