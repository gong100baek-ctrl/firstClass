(() => {
    const products = {
        "gas-boiler": { name: "가스보일러", image: "images/Kiturami02.png", lead: "쾌적한 생활환경을 위한 귀뚜라미 가스보일러 제품 카테고리입니다.", summary: "가스보일러 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "oil-boiler": { name: "기름보일러", image: "images/Kiturami01.png", lead: "다양한 난방 환경을 위한 귀뚜라미 기름보일러 제품 카테고리입니다.", summary: "기름보일러 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "water-heater": { name: "온수기", image: "images/Kiturami03.png", lead: "생활 속 온수 사용을 위한 귀뚜라미 온수기 제품 카테고리입니다.", summary: "온수기 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "renewable": { name: "신재생/중대형/전기", image: "images/Kiturami04.png", lead: "다양한 에너지 및 설비 환경을 위한 제품 카테고리입니다.", summary: "신재생·중대형·전기 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." },
        "heating-mat": { name: "난방매트", image: "images/Kiturami05.png", lead: "일상 속 난방을 위한 귀뚜라미 난방매트 제품 카테고리입니다.", summary: "난방매트 카테고리의 제품을 소개합니다. 모델별 구성과 기능은 제품에 따라 다를 수 있습니다." },
        "system": { name: "시스템 제품", image: "images/Kiturami06.png", lead: "공간과 설비 환경에 맞춘 귀뚜라미 시스템 제품 카테고리입니다.", summary: "시스템 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." },
        "air-care": { name: "공기청정/환기", image: "images/Kiturami07.png", lead: "실내 공기 환경을 위한 귀뚜라미 공기청정 및 환기 제품 카테고리입니다.", summary: "공기청정·환기 제품 카테고리를 소개합니다. 모델별 구성과 기능은 제품에 따라 다를 수 있습니다." },
        "air-conditioner": { name: "에어컨", image: "images/Kiturami08.png", lead: "실내 냉방 환경을 위한 귀뚜라미 에어컨 제품 카테고리입니다.", summary: "에어컨 카테고리의 제품을 소개합니다. 모델별 구성과 기능은 제품에 따라 다를 수 있습니다." },
        "thermostat": { name: "실내온도조절기", image: "images/Kiturami09.png", lead: "실내 온도 관리를 위한 귀뚜라미 실내온도조절기 제품 카테고리입니다.", summary: "실내온도조절기 카테고리의 제품을 소개합니다. 모델별 구성과 기능은 제품에 따라 다를 수 있습니다." },
        "etc": { name: "기타", image: "images/Kiturami10.png", lead: "그 외 다양한 귀뚜라미 제품 카테고리입니다.", summary: "기타 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." }
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "gas-boiler";
    const product = products[category] || products["gas-boiler"];

    document.title = product.name + " 상세 정보 | Kiturami";
    const el_detail_title = document.getElementById("detail-title");
    if (el_detail_title) el_detail_title.textContent = product.name;
    const el_detail_breadcrumb = document.getElementById("detail-breadcrumb");
    if (el_detail_breadcrumb) el_detail_breadcrumb.textContent = product.name;
    const el_detail_lead = document.getElementById("detail-lead");
    if (el_detail_lead) el_detail_lead.textContent = product.lead;
    document.getElementById("detail-summary-title").textContent = product.name;
    document.getElementById("detail-summary").textContent = product.summary;
    const image = document.getElementById("detail-image");
    image.src = product.image;
    image.alt = product.name + " 제품 이미지";

    const buyLink = document.getElementById("detail-buy");
    if (buyLink) buyLink.href = "checkout.html?category=" + encodeURIComponent(category);

    const productCards = document.querySelectorAll(".boiler-product-card");
    if (category === "gas-boiler") {
        const gasNames = [
            "귀뚜라미보일러 AI 방방 난방 시스템",
            "거꾸로 NEW 콘덴싱 P10 보일러",
            "거꾸로 NEW 콘덴싱 L10 보일러",
            "거꾸로 ECO 콘덴싱 L20 보일러",
            "거꾸로 ECO 콘덴싱 S20 보일러",
            "거꾸로 ECO 콘덴싱 보일러",
            "거꾸로 콘덴싱 프리미엄 가스보일러",
            "빌라형 거꾸로 콘덴싱 가스보일러",
            "트윈알파 eco L11 가스보일러",
            "거꾸로 IN L10 가스보일러"
        ];
        Array.from(productCards).forEach((card, index) => {
            const slide = card.closest(".swiper-slide");
            if (index >= gasNames.length) { if (slide) slide.style.display = "none"; return; }
            if (slide) slide.style.display = "";
            card.querySelector(".boiler-product-card__name").textContent = gasNames[index];
        });
        const sectionHeading = document.querySelector(".boiler-products .detail-section-heading");
        if (sectionHeading) {
            sectionHeading.querySelector(".detail-eyebrow").textContent = "GAS BOILER LINEUP";
            sectionHeading.querySelector("h3").textContent = "가스보일러 제품";
        }
    }
    if (category === "oil-boiler") {
        Array.from(productCards).forEach((card, index) => {
            const slide = card.closest(".swiper-slide");
            if (index >= 6) { slide.style.display = "none"; return; }
            slide.style.display = "";
            const img = card.querySelector(".boiler-product-card__image img");
            img.src = "images/oil_" + (index + 1) + ".png";
            img.alt = "귀뚜라미 기름보일러 제품 " + (index + 1);
            card.querySelector(".boiler-product-card__name").textContent = "기름보일러 제품 " + String(index + 1).padStart(2, "0");
        });
        const sectionHeading = document.querySelector(".boiler-products .detail-section-heading");
        if (sectionHeading) {
            sectionHeading.querySelector(".detail-eyebrow").textContent = "OIL BOILER LINEUP";
            sectionHeading.querySelector("h3").textContent = "기름보일러 제품";
        }
    }
    const detailInfo = document.getElementById("detail-info");
    const selectedProductName = document.getElementById("selected-product-name");

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            productCards.forEach((item) => item.setAttribute("aria-pressed", String(item === card)));
            selectedProductName.textContent = card.querySelector(".boiler-product-card__name").textContent;
            const buy = document.getElementById("detail-buy");
            if (buy) buy.href = "checkout.html?category=" + encodeURIComponent(category) + "&item=" + encodeURIComponent(selectedProductName.textContent);
            detailInfo.hidden = false;
            detailInfo.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    if (window.Swiper) {
        const boilerSwiper = new Swiper(".boiler-swiper", {
            direction: "horizontal",
            loop: true,
            initialSlide: 0,
            slidesPerView: 4.7,
            centeredSlides: true,
            spaceBetween: 40,
            breakpoints: {
                1025: {
                    slidesPerView: 4.7,
                    centeredSlides: false
                },
                768: {
                    slidesPerView: 2.3,
                    centeredSlides: false
                },
                0: {
                    slidesPerView: 1.2,
                    centeredSlides: false,
                    spaceBetween: 20
                }
            }
        });

        const updateCenterProduct = () => {
            const swiperRect = boilerSwiper.el.getBoundingClientRect();
            const centerX = swiperRect.left + swiperRect.width / 2;
            let closestSlide = null;
            let closestDistance = Infinity;

            boilerSwiper.slides.forEach((slide) => {
                slide.classList.remove("is-center-product");
                const rect = slide.getBoundingClientRect();
                const distance = Math.abs((rect.left + rect.width / 2) - centerX);

                if (rect.right > swiperRect.left && rect.left < swiperRect.right && distance < closestDistance) {
                    closestDistance = distance;
                    closestSlide = slide;
                }
            });

            if (closestSlide) closestSlide.classList.add("is-center-product");
        };

        const showFirstProduct = () => {
            boilerSwiper.slideToLoop(0, 0);
            updateCenterProduct();
        };

        boilerSwiper.on("slideChangeTransitionEnd", updateCenterProduct);
        boilerSwiper.on("resize", updateCenterProduct);
        updateCenterProduct();
        window.addEventListener("load", showFirstProduct);
        window.addEventListener("pageshow", (event) => {
            if (event.persisted) showFirstProduct();
        });
    }

    const localSelect = document.getElementById("detail-local-select");
    if (localSelect) localSelect.value = "product-detail.html?category=" + (products[category] ? category : "gas-boiler");

    const familySite = document.getElementById("family-site");
    familySite.addEventListener("change", () => {
        if (familySite.value) window.location.href = familySite.value;
    });
    (() => {
        const header = document.querySelector(".header");
        const toggle = document.querySelector(".menu-toggle");
        toggle?.addEventListener("click", () => {
            const opened = header.classList.toggle("menu-open");
            toggle.setAttribute("aria-expanded", String(opened));
            toggle.setAttribute("aria-label", opened ? "메뉴 닫기" : "메뉴 열기");
        });
        const lang = document.querySelector(".language");
        const langToggle = document.querySelector(".language-toggle");
        const langMenu = document.querySelector(".language-menu");
        const langCurrent = document.querySelector(".language-current");
        if (lang && langToggle && langMenu && langCurrent) {
            langToggle.addEventListener("click", () => {
                const opened = langToggle.getAttribute("aria-expanded") === "true";
                langToggle.setAttribute("aria-expanded", String(!opened));
                langMenu.hidden = opened;
            });
            langMenu.querySelectorAll(".language-option").forEach((o) => o.addEventListener("click", () => {
                langCurrent.textContent = o.dataset.language;
                langToggle.setAttribute("aria-expanded", "false");
                langMenu.hidden = true;
            }));
            document.addEventListener("click", (e) => { if (!lang.contains(e.target)) { langToggle.setAttribute("aria-expanded", "false"); langMenu.hidden = true; } });
        }
    })();
})();