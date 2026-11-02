document.addEventListener("DOMContentLoaded", () => {
    const visualElement = document.querySelector(".about-visual");
    if (visualElement && typeof Swiper !== "undefined") {
        new Swiper(visualElement, {
            loop: true,
            effect: "fade",
            fadeEffect: { crossFade: true },
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: ".about-visual-controls .swiper-pagination", clickable: true },
            navigation: { nextEl: ".about-visual-next", prevEl: ".about-visual-prev" },
            a11y: { enabled: true }
        });
    }

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    if (header && menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            menuToggle.setAttribute("aria-label", isOpen ? "메뉴 열기" : "메뉴 닫기");
            header.classList.toggle("menu-open", !isOpen);
        });
    }

    const language = document.querySelector(".language");
    const languageToggle = document.querySelector(".language-toggle");
    const languageMenu = document.querySelector(".language-menu");
    const languageCurrent = document.querySelector(".language-current");
    if (language && languageToggle && languageMenu) {
        languageToggle.addEventListener("click", () => {
            const isOpen = languageToggle.getAttribute("aria-expanded") === "true";
            languageToggle.setAttribute("aria-expanded", String(!isOpen));
            languageMenu.hidden = isOpen;
            language.classList.toggle("is-open", !isOpen);
        });
        languageMenu.querySelectorAll(".language-option").forEach((option) => {
            option.addEventListener("click", () => {
                languageCurrent.textContent = option.textContent.trim();
                languageMenu.querySelectorAll(".language-option").forEach((item) => item.classList.remove("is-selected"));
                option.classList.add("is-selected");
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
    const familySite = document.querySelector("#family-site");
    if (familySite) {
        familySite.addEventListener("change", () => {
            const value = familySite.value;
            if (value && /^https?:\/\//.test(value)) window.open(value, "_blank", "noopener");
        });
    }
});