/* About page: global navigation and page interactions */
(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = [...document.querySelectorAll(".gnb-item")];
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    const familySite = document.querySelector("#family-site");
    const localLinks = [...document.querySelectorAll(".about-local-nav a")];
    const sections = localLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const closeSubmenus = () => {
        navItems.forEach((item) => {
            item.classList.remove("is-open");
            item.querySelector(":scope > a[aria-controls]")?.setAttribute("aria-expanded", "false");
        });
        header?.classList.remove("mega-menu-open");
    };

    if (header && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
            if (!isOpen) closeSubmenus();
        });

        navItems.forEach((item) => {
            const trigger = item.querySelector(":scope > a[aria-controls]");
            const submenu = item.querySelector(":scope > .mega-menu");

            // 모든 GNB 항목에 적용: 서브메뉴가 없는 항목에 마우스를 올려도
            // 이전에 열려 있던 서브메뉴를 먼저 닫는다.
            item.addEventListener("mouseenter", () => {
                if (window.matchMedia("(max-width: 1024px)").matches) return;

                closeSubmenus();
                if (submenu) {
                    item.classList.add("is-open");
                    trigger?.setAttribute("aria-expanded", "true");
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
                const willOpen = !item.classList.contains("is-open");
                closeSubmenus();
                item.classList.toggle("is-open", willOpen);
                trigger.setAttribute("aria-expanded", String(willOpen));
                header.classList.toggle("mega-menu-open", willOpen);
            });

        });

        header.addEventListener("mouseleave", () => {
            if (!window.matchMedia("(max-width: 1024px)").matches) {
                closeSubmenus();
                header.classList.remove("mega-menu-open");
            }
        });
        header.addEventListener("focusout", (event) => {
            if (!header.contains(event.relatedTarget) && !window.matchMedia("(max-width: 1024px)").matches) {
                closeSubmenus();
                header.classList.remove("mega-menu-open");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeSubmenus();
                header.classList.remove("mega-menu-open", "menu-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "메뉴 열기");
            }
        });
    }

    if (languageToggle && languageMenu && languageCurrent && language) {
        languageToggle.addEventListener("click", () => {
            const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
            languageToggle.setAttribute("aria-expanded", String(!isOpen));
            languageMenu.hidden = isOpen;
            language.classList.toggle("is-open", !isOpen);
        });

        languageMenu.querySelectorAll(".language-option").forEach((option) => {
            option.addEventListener("click", () => {
                languageCurrent.textContent = option.dataset.language;
                languageMenu.querySelectorAll(".language-option").forEach((item) => {
                    item.classList.toggle("is-selected", item === option);
                });
                languageToggle.setAttribute("aria-expanded", "false");
                languageMenu.hidden = true;
                language.classList.remove("is-open");
            });
        });

        document.addEventListener("click", (event) => {
            if (!language.contains(event.target)) {
                languageToggle.setAttribute("aria-expanded", "false");
                languageMenu.hidden = true;
                language.classList.remove("is-open");
            }
        });
    }

    if (familySite) {
        familySite.addEventListener("change", () => {
            if (familySite.value) window.location.href = familySite.value;
        });
    }

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    localLinks.forEach((link) => {
                        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
                    });
                }
            });
        }, { rootMargin: "-25% 0px -60% 0px" });
        sections.forEach((section) => observer.observe(section));
    }

    localLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (header?.classList.contains("menu-open")) {
                header.classList.remove("menu-open");
                menuToggle?.setAttribute("aria-expanded", "false");
                menuToggle?.setAttribute("aria-label", "메뉴 열기");
                closeSubmenus();
            }
        });
    });
})();