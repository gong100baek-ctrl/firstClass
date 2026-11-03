(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const triggers = [...document.querySelectorAll(".gnb-item > a[aria-controls]")];
    const menus = [...document.querySelectorAll(".header .mega-menu")];
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const familySite = document.querySelector("#family-site");
    let closeTimer;

    const closeMenus = () => {
        clearTimeout(closeTimer);
        header?.classList.remove("mega-menu-open");
        menus.forEach(menu => menu.classList.remove("is-active"));
        triggers.forEach(trigger => trigger.setAttribute("aria-expanded", "false"));
    };
    const openMenu = trigger => {
        clearTimeout(closeTimer);
        const target = trigger.getAttribute("aria-controls");
        menus.forEach(menu => menu.classList.toggle("is-active", menu.id === target));
        header?.classList.add("mega-menu-open");
        triggers.forEach(item => item.setAttribute("aria-expanded", String(item === trigger)));
    };

    triggers.forEach(trigger => {
        const item = trigger.closest(".gnb-item");
        item?.addEventListener("mouseenter", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) openMenu(trigger);
        });
        item?.addEventListener("mouseleave", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) closeTimer = setTimeout(closeMenus, 120);
        });
        trigger.addEventListener("focus", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) openMenu(trigger);
        });
    });
    menus.forEach(menu => {
        menu.addEventListener("mouseenter", () => clearTimeout(closeTimer));
        menu.addEventListener("mouseleave", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) closeTimer = setTimeout(closeMenus, 120);
        });
    });

    menuToggle?.addEventListener("click", () => {
        const opened = header.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", String(opened));
        menuToggle.setAttribute("aria-label", opened ? "메뉴 닫기" : "메뉴 열기");
        if (!opened) closeMenus();
    });

    languageToggle?.addEventListener("click", () => {
        const opened = languageToggle.getAttribute("aria-expanded") === "true";
        languageToggle.setAttribute("aria-expanded", String(!opened));
        languageMenu.hidden = opened;
    });
    languageMenu?.querySelectorAll(".language-option").forEach(option => {
        option.addEventListener("click", () => {
            document.querySelector(".language-current").textContent = option.dataset.language;
            languageMenu.querySelectorAll(".language-option").forEach(item => item.classList.toggle("is-selected", item === option));
            languageToggle.setAttribute("aria-expanded", "false");
            languageMenu.hidden = true;
        });
    });
    document.addEventListener("click", event => {
        if (language && !language.contains(event.target)) {
            languageToggle?.setAttribute("aria-expanded", "false");
            if (languageMenu) languageMenu.hidden = true;
        }
        if (header && !header.contains(event.target)) closeMenus();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenus();
            header?.classList.remove("menu-open");
            menuToggle?.setAttribute("aria-expanded", "false");
            languageToggle?.setAttribute("aria-expanded", "false");
            if (languageMenu) languageMenu.hidden = true;
        }
    });
    familySite?.addEventListener("change", () => {
        if (familySite.value) window.location.href = familySite.value;
    });
    document.querySelectorAll(".mall-local-nav a").forEach(link => {
        link.addEventListener("click", () => {
            document.querySelectorAll(".mall-local-nav a").forEach(item => item.classList.toggle("is-active", item === link));
        });
    });
})();