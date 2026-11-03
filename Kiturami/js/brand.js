/* Brand page: mobile navigation, language selector and section position state */
(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    const familySite = document.querySelector("#family-site");
    const localLinks = [...document.querySelectorAll(".brand-local-nav a")];
    const sections = localLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (header && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const opened = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(opened));
            menuToggle.setAttribute("aria-label", opened ? "메뉴 닫기" : "메뉴 열기");
        });

        header.querySelectorAll(".gnb a").forEach((link) => {
            link.addEventListener("click", () => {
                if (window.matchMedia("(max-width: 1024px)").matches) {
                    header.classList.remove("menu-open");
                    menuToggle.setAttribute("aria-expanded", "false");
                    menuToggle.setAttribute("aria-label", "메뉴 열기");
                }
            });
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
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
                languageMenu.querySelectorAll(".language-option").forEach((item) => {
                    item.classList.toggle("is-selected", item === option);
                });
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

    if (familySite) {
        familySite.addEventListener("change", () => {
            if (familySite.value) window.location.href = familySite.value;
        });
    }

    if ("IntersectionObserver" in window && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                localLinks.forEach((link) => {
                    link.classList.toggle("is-active", link.hash === "#" + entry.target.id);
                });
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
            }
        });
    });
})();