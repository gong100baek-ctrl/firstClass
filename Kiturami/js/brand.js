/* Brand page interactions: responsive GNB, language menu and section navigation */
(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = [...document.querySelectorAll(".gnb-item")];
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    const familySite = document.querySelector("#family-site");
    const localLinks = [...document.querySelectorAll(".brand-local-nav a")];
    const sections = localLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    const closeMenus = () => {
        navItems.forEach((item) => {
            item.classList.remove("is-open");
            item.querySelector(":scope > a[aria-controls]")?.setAttribute("aria-expanded", "false");
        });
        header?.querySelectorAll(".mega-menu").forEach((menu) => menu.classList.remove("is-active"));
        header?.classList.remove("mega-menu-open");
    };

    if (header && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const opened = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(opened));
            menuToggle.setAttribute("aria-label", opened ? "메뉴 닫기" : "메뉴 열기");
            if (!opened) closeMenus();
        });

        navItems.forEach((item) => {
            const trigger = item.querySelector(":scope > a[aria-controls]");
            const submenu = item.querySelector(":scope > .mega-menu");
            item.addEventListener("mouseenter", () => {
                if (window.matchMedia("(max-width: 1024px)").matches) return;
                closeMenus();
                if (submenu) {
                    item.classList.add("is-open");
                    trigger?.setAttribute("aria-expanded", "true");
                    submenu.classList.add("is-active");
                    header.classList.add("mega-menu-open");
                }
            });
            if (!trigger || !submenu) return;
            trigger.addEventListener("click", (event) => {
                if (!window.matchMedia("(max-width: 1024px)").matches) {
                    event.preventDefault();
                    return;
                }
                event.preventDefault();
                const opened = !item.classList.contains("is-open");
                closeMenus();
                item.classList.toggle("is-open", opened);
                trigger.setAttribute("aria-expanded", String(opened));
                submenu.classList.toggle("is-active", opened);
                header.classList.toggle("mega-menu-open", opened);
            });
        });

        header.addEventListener("mouseleave", () => {
            if (!window.matchMedia("(max-width: 1024px)").matches) closeMenus();
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenus();
                header.classList.remove("menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "메뉴 열기");
            }
        });
    }

    if (language && languageToggle && languageMenu && languageCurrent) {
        languageToggle.addEventListener("click", () => {
            const opened = languageToggle.getAttribute("aria-expanded") === "true";
            languageToggle.setAttribute("aria-expanded", String(!opened));
            languageMenu.hidden = opened;
        });
        languageMenu.querySelectorAll(".language-option").forEach((option) => {
            option.addEventListener("click", () => {
                languageCurrent.textContent = option.dataset.language;
                languageMenu.querySelectorAll(".language-option").forEach((item) => item.classList.toggle("is-selected", item === option));
                languageToggle.setAttribute("aria-expanded", "false");
                languageMenu.hidden = true;
            });
        });
        document.addEventListener("click", (event) => {
            if (!language.contains(event.target)) {
                languageToggle.setAttribute("aria-expanded", "false");
                languageMenu.hidden = true;
            }
        });
    }

    if (familySite) familySite.addEventListener("change", () => {
        if (familySite.value) window.location.href = familySite.value;
    });

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                localLinks.forEach((link) => link.classList.toggle("is-active", link.hash === "#" + entry.target.id));
            });
        }, { rootMargin: "-25% 0px -60% 0px" });
        sections.forEach((section) => observer.observe(section));
    }
    localLinks.forEach((link) => link.addEventListener("click", () => {
        if (header?.classList.contains("menu-open")) {
            header.classList.remove("menu-open");
            menuToggle?.setAttribute("aria-expanded", "false");
            menuToggle?.setAttribute("aria-label", "메뉴 열기");
            closeMenus();
        }
    }));
})();