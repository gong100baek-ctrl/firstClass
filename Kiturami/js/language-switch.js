/* Kiturami shared language switcher for internal pages. */
(function () {
  const SCRIPT_BASE = (document.currentScript && document.currentScript.src || "").replace(/[^/]*$/, "");
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

    let toggle = wrapper.querySelector(".language-toggle");
    let menu = wrapper.querySelector(".language-menu");
    if (!toggle || !menu) return;
    // 페이지별 스크립트(cc.js, mall.js 등)가 같은 버튼에 먼저 단 이벤트와 겹치면 메뉴가 열리자마자 닫히므로,
    // 언어 메뉴의 이벤트는 이 스크립트가 단독으로 관리하도록 기존 버튼을 새 버튼으로 교체합니다.
    toggle = replaceWithClone(toggle);
    const current = wrapper.querySelector(".language-current");
    if (!current) return;

    menu.id = menu.id || "language-menu";
    toggle.setAttribute("aria-controls", menu.id);
    if (!menu.querySelector(".language-option")) {
      menu.innerHTML = labels.map(label => '<button type="button" class="language-option" data-language="' + label + '">' + label + '</button>').join("");
    }
    const options = Array.from(menu.querySelectorAll(".language-option")).map(replaceWithClone);
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
        markSelected(options, language);
        saveLanguage(language);
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        location.reload();
      });
    });

    document.addEventListener("click", function (event) {
      if (!wrapper.contains(event.target)) {
        menu.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // 저장된 언어 복원: 구글 번역 쿠키를 우선하고, 없으면 메인 페이지에서 고른 언어(localStorage)를 따릅니다.
    const cookieCode = readGoogleCookie().split("/").pop();
    const code = cookieCode || languageMap[readSavedLanguage()] || "";
    const label = Object.entries(languageMap).find(([name, value]) => value === code)?.[0];
    if (label) {
      current.textContent = label;
      markSelected(options, label);
      saveLanguage(label);
      // 메인 페이지에서만 고른 언어라면 이 페이지에도 번역을 적용합니다.
      // 쿠키가 이미 있어도 위젯이 자동 적용하지 못하는 경우가 있어 항상 직접 적용합니다.
      if (code !== "ko") { applyLocalDictionary(label); applyLanguage(code); }
    }
  }


  // 구글 번역과 별개로, 공통 문구(메뉴·푸터 등)는 내부 번역 사전으로 즉시 바꿉니다.
  function applyLocalDictionary(label) {
    const run = function () {
      const dict = (window.KITURAMI_I18N || {})[label];
      if (!dict) return;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (node) {
        if (node.parentElement.closest("script, style, .language-menu")) return;
        const key = node.nodeValue.trim();
        if (key && dict[key]) node.nodeValue = node.nodeValue.replace(key, dict[key]);
      });
      document.querySelectorAll("[aria-label], img[alt]").forEach(function (el) {
        ["aria-label", "alt"].forEach(function (attr) {
          const v = el.getAttribute(attr);
          if (v && dict[v]) el.setAttribute(attr, dict[v]);
        });
      });
      document.documentElement.lang = languageMap[label] === "zh-CN" ? "zh" : languageMap[label];
    };
    if (window.KITURAMI_I18N) return run();
    const script = document.createElement("script");
    script.src = SCRIPT_BASE + "site-i18n.js";
    script.onload = run;
    document.head.appendChild(script);
  }

  function readGoogleCookie() {
    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }

  function replaceWithClone(element) {
    const clone = element.cloneNode(true);
    element.replaceWith(clone);
    return clone;
  }

  function markSelected(options, label) {
    options.forEach(option => option.classList.toggle("is-selected", option.dataset.language === label));
  }

  // 메인 페이지(index.html)와 같은 키로 선택 언어를 저장해 페이지를 옮겨도 언어가 이어지게 합니다.
  function saveLanguage(label) {
    try { localStorage.setItem("kiturami-language", label); } catch (error) {}
    // 번역 위젯이 늦게 뜨거나 실패해도 다음 페이지가 같은 언어로 열리도록 쿠키에도 직접 기록합니다.
    const code = languageMap[label];
    if (code) document.cookie = "googtrans=/ko/" + code + ";path=/";
  }

  function readSavedLanguage() {
    try { return localStorage.getItem("kiturami-language") || ""; } catch (error) { return ""; }
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