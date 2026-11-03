/* Brand introduction page interactions */
(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    const familySite = document.querySelector("#family-site");
    const localLinks = [...document.querySelectorAll(".about-local-nav a")];
    const sections = localLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if (menuToggle && header) {
        menuToggle.addEventListener("click", () => {
            const isOpen = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
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
            if (header && header.classList.contains("menu-open")) {
                header.classList.remove("menu-open");
                menuToggle?.setAttribute("aria-expanded", "false");
            }
        });
    });
})();
