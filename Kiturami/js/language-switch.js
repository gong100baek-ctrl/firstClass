/* Kiturami shared language switcher for internal pages. */
(function () {
  const languageMap = {
    "한국어": "ko", "English": "en", "日本語": "ja", "中文": "zh-CN", "Русский": "ru"
  };
  const labels = Object.keys(languageMap);

  function initUI() {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner) return;

    let wrapper = headerInner.querySelector(".language");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.className = "language";
      wrapper.innerHTML = '<button class="language-toggle" type="button" aria-label="언어 선택" aria-expanded="false" aria-controls="language-menu"><span class="language-current">한국어</span><span aria-hidden="true">⌄</span></button><div class="language-menu" id="language-menu" hidden></div>';
      headerInner.appendChild(wrapper);
    }

    const toggle = wrapper.querySelector(".language-toggle");
    const current = wrapper.querySelector(".language-current");
    let menu = wrapper.querySelector(".language-menu");
    if (!toggle || !current || !menu) return;

    menu.id = menu.id || "language-menu";
    toggle.setAttribute("aria-controls", menu.id);
    if (!menu.querySelector(".language-option")) {
      menu.innerHTML = labels.map(label => '<button type="button" class="language-option" data-language="' + label + '">' + label + '</button>').join("");
    }
    const options = Array.from(menu.querySelectorAll(".language-option"));
    options.forEach(option => {
      const label = option.dataset.language || option.textContent.trim();
      option.dataset.language = label;
    });

    if (toggle.dataset.languageReady !== "true") {
      toggle.dataset.languageReady = "true";
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        const open = menu.hidden;
        menu.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
      });
    }

    options.forEach(option => {
      if (option.dataset.languageReady === "true") return;
      option.dataset.languageReady = "true";
      option.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        const language = option.dataset.language || option.textContent.trim();
        current.textContent = language;
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        applyLanguage(languageMap[language]);
      });
    });

    document.addEventListener("click", function (event) {
      if (!wrapper.contains(event.target)) {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    const saved = readGoogleCookie();
    if (saved) {
      const code = saved.split("/").pop();
      const label = Object.entries(languageMap).find(([name, value]) => value === code)?.[0];
      if (label) current.textContent = label;
    }
  }

  function readGoogleCookie() {
    const match = document.cookie.match(/(?:^|;\\s*)googtrans=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function applyLanguage(code) {
    if (!code) return;
    if (code === "ko") {
      document.cookie = "googtrans=/ko/ko;path=/";
      document.cookie = "googtrans=/ko/ko;path=/Kiturami";
      document.cookie = "googtrans=/ko/ko;path=/;domain=" + location.hostname;
      location.reload();
      return;
    }
    window.__kituramiTranslateTarget = code;
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }
    ensureTranslateScript();
    let attempts = 0;
    const waitForCombo = function () {
      const readyCombo = document.querySelector(".goog-te-combo");
      if (readyCombo) {
        readyCombo.value = code;
        readyCombo.dispatchEvent(new Event("change", { bubbles: true }));
      } else if (attempts++ < 40) {
        setTimeout(waitForCombo, 250);
      }
    };
    waitForCombo();
  }

  function ensureTranslateScript() {
    if (window.google && window.google.translate) return;
    if (document.getElementById("kiturami-translate-script")) return;
    const script = document.createElement("script");
    script.id = "kiturami-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=kituramiGoogleTranslateInit";
    script.async = true;
    document.head.appendChild(script);
  }

  window.kituramiGoogleTranslateInit = function () {
    if (!document.getElementById("kiturami-google-translate")) {
      const holder = document.createElement("div");
      holder.id = "kiturami-google-translate";
      holder.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden";
      document.body.appendChild(holder);
    }
    new google.translate.TranslateElement({
      pageLanguage: "ko", includedLanguages: "en,ja,zh-CN,ru", autoDisplay: false
    }, "kiturami-google-translate");
    const target = window.__kituramiTranslateTarget;
    if (target) setTimeout(function () { applyLanguage(target); }, 500);
  };

  function mountStyles() {
    if (document.getElementById("kiturami-language-style")) return;
    const style = document.createElement("style");
    style.id = "kiturami-language-style";
    style.textContent = ".language{position:relative!important;z-index:99999!important}.language-toggle{position:relative!important;z-index:99999!important;pointer-events:auto!important;cursor:pointer!important}.language-menu:not([hidden]){display:block!important;position:absolute!important;z-index:100000!important;pointer-events:auto!important}.language-menu[hidden]{display:none!important}.language-option{pointer-events:auto!important;cursor:pointer!important}.goog-te-banner-frame,.skiptranslate iframe,.goog-te-gadget,.goog-te-balloon-frame{display:none!important}body{top:0!important}.goog-tooltip,.goog-tooltip:hover{display:none!important}.goog-text-highlight{background:transparent!important;box-shadow:none!important}";
    document.head.appendChild(style);
  }

  function boot() {
    mountStyles();
    initUI();
    ensureTranslateScript();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();