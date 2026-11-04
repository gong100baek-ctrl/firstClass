/* Brand page interactions: company mega menu, mobile navigation, language selector and section navigation */
(() => {
    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const companyItem = document.querySelector(".gnb-company");
    const companyToggle = companyItem?.querySelector("a[aria-controls='header-mega-menu']");
    const companyMenu = document.querySelector("#header-mega-menu");
    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    const familySite = document.querySelector("#family-site");
    const localSelect = document.querySelector("#brand-local-select");
    const localOptions = localSelect ? [...localSelect.options] : [];
    const sectionLinks = [...document.querySelectorAll("#header-mega-menu a[href^='#']")];
    const sections = [...new Set([...localOptions.map((option) => option.value), ...sectionLinks.map((link) => link.getAttribute("href"))]
        .map((hash) => document.querySelector(hash))
        .filter(Boolean))];

    const closeCompanyMenu = () => {
        header?.classList.remove("mega-menu-open");
        companyMenu?.classList.remove("is-active");
        companyToggle?.setAttribute("aria-expanded", "false");
    };

    const openCompanyMenu = () => {
        header?.classList.add("mega-menu-open");
        companyMenu?.classList.add("is-active");
        companyToggle?.setAttribute("aria-expanded", "true");
    };

    if (header && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const opened = header.classList.toggle("menu-open");
            menuToggle.setAttribute("aria-expanded", String(opened));
            menuToggle.setAttribute("aria-label", opened ? "메뉴 닫기" : "메뉴 열기");
            if (!opened) closeCompanyMenu();
        });
    }

    if (companyItem && companyToggle && companyMenu) {
        companyToggle.addEventListener("click", (event) => {
            const opened = companyToggle.getAttribute("aria-expanded") === "true";
            if (opened) closeCompanyMenu();
            else openCompanyMenu();
        });

        companyItem.addEventListener("mouseenter", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) openCompanyMenu();
        });

        companyItem.addEventListener("focusin", () => openCompanyMenu());

        header?.addEventListener("mouseleave", () => {
            if (window.matchMedia("(min-width: 1025px)").matches) closeCompanyMenu();
        });

        companyMenu.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
                closeCompanyMenu();
                header?.classList.remove("menu-open");
                menuToggle?.setAttribute("aria-expanded", "false");
                menuToggle?.setAttribute("aria-label", "메뉴 열기");
            });
        });
    }

    header?.querySelectorAll(".gnb a:not(.gnb-company > a)").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.matchMedia("(max-width: 1024px)").matches) {
                header.classList.remove("menu-open");
                menuToggle?.setAttribute("aria-expanded", "false");
                menuToggle?.setAttribute("aria-label", "메뉴 열기");
                closeCompanyMenu();
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeCompanyMenu();
            header?.classList.remove("menu-open");
            menuToggle?.setAttribute("aria-expanded", "false");
            menuToggle?.setAttribute("aria-label", "메뉴 열기");
            languageToggle?.setAttribute("aria-expanded", "false");
            if (languageMenu) languageMenu.hidden = true;
        }
    });

    document.addEventListener("click", (event) => {
        if (header && !header.contains(event.target)) closeCompanyMenu();
    });

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
                if (localSelect && localOptions.some((option) => option.value === "#" + entry.target.id)) {
                    localSelect.value = "#" + entry.target.id;
                }
            });
        }, { rootMargin: "-22% 0px -65% 0px" });

        sections.forEach((section) => observer.observe(section));
    }

    if (localSelect) {
        localSelect.addEventListener("change", () => {
            const target = document.querySelector(localSelect.value);
            if (!target) return;
            closeCompanyMenu();
            header?.classList.remove("menu-open");
            menuToggle?.setAttribute("aria-expanded", "false");
            menuToggle?.setAttribute("aria-label", "메뉴 열기");
            target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
            history.replaceState(null, "", localSelect.value);
        });
    }

    document.querySelectorAll("[role='tablist']").forEach((list) => {
        const tabs = [...list.querySelectorAll("[role='tab']")];
        const activate = (tab, focus) => {
            tabs.forEach((item) => {
                const selected = item === tab;
                item.classList.toggle("is-active", selected);
                item.setAttribute("aria-selected", String(selected));
                item.tabIndex = selected ? 0 : -1;
                const pane = document.getElementById(item.getAttribute("aria-controls"));
                if (pane) pane.hidden = !selected;
            });
            if (focus) tab.focus();
        };

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => activate(tab));
            tab.addEventListener("keydown", (event) => {
                const keys = { ArrowRight: 1, ArrowLeft: -1 };
                if (event.key in keys) {
                    event.preventDefault();
                    activate(tabs[(index + keys[event.key] + tabs.length) % tabs.length], true);
                } else if (event.key === "Home" || event.key === "End") {
                    event.preventDefault();
                    activate(tabs[event.key === "Home" ? 0 : tabs.length - 1], true);
                }
            });
        });
    });

    document.querySelectorAll(".branch-filters").forEach((bar) => {
        const chips = [...bar.querySelectorAll("[data-filter]")];
        const cards = [...document.querySelectorAll("#" + bar.dataset.target + " [data-region]")];
        chips.forEach((chip) => {
            chip.addEventListener("click", () => {
                chips.forEach((item) => {
                    item.classList.toggle("is-active", item === chip);
                    item.setAttribute("aria-pressed", String(item === chip));
                });
                cards.forEach((card) => {
                    card.hidden = chip.dataset.filter !== "all" && card.dataset.region !== chip.dataset.filter;
                });
            });
        });
    });
})();
