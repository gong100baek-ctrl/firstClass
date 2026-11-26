/* Kiturami site-wide language switcher. Keeps existing page behavior and layout intact. */
(function () {
  const languageMap = {
    "한국어": "ko", "English": "en", "日本語": "ja", "中文": "zh-CN", "Русский": "ru"
  };
  const labels = Object.keys(languageMap);
  function initUI() {
    let wrapper = document.querySelector(".language");
    if (!wrapper) {
      const headerInner = document.querySelector(".header-inner");
      if (!headerInner) return;
      wrapper = document.createElement("div");
      wrapper.className = "language";
      wrapper.innerHTML = '<button class="language-toggle" type="button" aria-label="언어 선택" aria-expanded="false"><span class="language-current">한국어</span><span aria-hidden="true">⌄</span></button><div class="language-menu" hidden></div>';
      headerInner.appendChild(wrapper);
    }
    const toggle = wrapper.querySelector(".language-toggle");
    const current = wrapper.querySelector(".language-current");
    const menu = wrapper.querySelector(".language-menu");
    if (!menu.querySelector(".language-option")) {
      menu.innerHTML = labels.map(l => '<button type="button" class="language-option" data-language="'+l+'">'+l+'</button>').join("");
    }
    const options = [...menu.querySelectorAll(".language-option")];
    toggle.addEventListener("click", function () {
      const open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });
    options.forEach(option => {
      option.addEventListener("click", function () {
        const language = option.dataset.language || option.textContent.trim();
        current.textContent = language;
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        const code = languageMap[language];
        if (code === "ko") {
          document.cookie = "googtrans=/ko/ko;path=/";
          document.cookie = "googtrans=/ko/ko;path=/Kiturami";
          location.reload();
          return;
        }
        applyLanguage(code);
      });
    });
    document.addEventListener("click", event => {
      if (!wrapper.contains(event.target)) {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    const saved = readGoogleCookie();
    if (saved) {
      const code = saved.split("/").pop();
      const label = Object.entries(languageMap).find(([l,c])=>c===code)?.[0];
      if (label && current) current.textContent = label;
    }
  }
  function readGoogleCookie() {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }
  function applyLanguage(code) {
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
      return;
    }
    window.__kituramiTranslateTarget = code;
    if (!window.google || !window.google.translate) {
      if (!document.getElementById("kiturami-translate-script")) {
        const script = document.createElement("script");
        script.id = "kiturami-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=kituramiGoogleTranslateInit";
        script.async = true;
        document.head.appendChild(script);
      }
    } else {
      window.__kituramiTranslateTarget = code;
      let attempts = 0;
      const waitForCombo = () => {
        const readyCombo = document.querySelector(".goog-te-combo");
        if (readyCombo) {
          readyCombo.value = code;
          readyCombo.dispatchEvent(new Event("change"));
        } else if (attempts++ < 20) {
          setTimeout(waitForCombo, 250);
        }
      };
      waitForCombo();
    }
  }
  window.kituramiGoogleTranslateInit = function () {
    new google.translate.TranslateElement({
      pageLanguage: "ko", includedLanguages: "en,ja,zh-CN,ru", autoDisplay: false
    }, "kiturami-google-translate");
    const target = window.__kituramiTranslateTarget;
    if (target) setTimeout(() => applyLanguage(target), 500);
  };
  function mountHiddenWidget() {
    if (!document.getElementById("kiturami-google-translate")) {
      const holder = document.createElement("div");
      holder.id = "kiturami-google-translate";
      holder.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden";
      document.body.appendChild(holder);
    }
    const style = document.createElement("style");
    style.textContent = ".language{position:relative!important;z-index:99999!important}.language-toggle{position:relative!important;z-index:99999!important;pointer-events:auto!important;cursor:pointer!important}.language-menu:not([hidden]){display:block!important;position:absolute!important;z-index:100000!important;pointer-events:auto!important}.language-menu[hidden]{display:none!important}.language-option{pointer-events:auto!important;cursor:pointer!important}.goog-te-banner-frame,.skiptranslate iframe,.goog-te-gadget,.goog-te-balloon-frame{display:none!important}body{top:0!important}.goog-tooltip,.goog-tooltip:hover{display:none!important}.goog-text-highlight{background:transparent!important;box-shadow:none!important}";
    document.head.appendChild(style);
  }
  function boot() {
    mountHiddenWidget();
    initUI();
    if (!document.getElementById("kiturami-translate-script")) {
      const script = document.createElement("script");
      script.id = "kiturami-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=kituramiGoogleTranslateInit";
      script.async = true;
      document.head.appendChild(script);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();