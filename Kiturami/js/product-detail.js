(() => {
    const products = {
        "gas-boiler": { name: "가스보일러", image: "images/Kiturami02.png", lead: "쾌적한 생활환경을 위한 귀뚜라미 가스보일러 제품 카테고리입니다.", summary: "가스보일러 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "oil-boiler": { name: "기름보일러", image: "images/Kiturami01.png", lead: "다양한 난방 환경을 위한 귀뚜라미 기름보일러 제품 카테고리입니다.", summary: "기름보일러 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "water-heater": { name: "온수기", image: "images/Kiturami03.png", lead: "생활 속 온수 사용을 위한 귀뚜라미 온수기 제품 카테고리입니다.", summary: "온수기 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "renewable": { name: "신재생/중대형/전기", image: "images/Kiturami04.png", lead: "다양한 에너지 및 설비 환경을 위한 제품 카테고리입니다.", summary: "신재생·중대형·전기 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." },
        "heating-mat": { name: "난방매트", image: "images/Kiturami05.png", lead: "일상 속 난방을 위한 귀뚜라미 난방매트 제품 카테고리입니다.", summary: "난방매트 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "system": { name: "시스템 제품", image: "images/Kiturami06.png", lead: "공간과 설비 환경에 맞춘 귀뚜라미 시스템 제품 카테고리입니다.", summary: "시스템 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." },
        "air-care": { name: "공기청정/환기", image: "images/Kiturami07.png", lead: "실내 공기 환경을 위한 귀뚜라미 공기청정 및 환기 제품 카테고리입니다.", summary: "공기청정·환기 제품 카테고리를 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "air-conditioner": { name: "에어컨", image: "images/Kiturami08.png", lead: "실내 냉방 환경을 위한 귀뚜라미 에어컨 제품 카테고리입니다.", summary: "에어컨 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "thermostat": { name: "실내온도조절기", image: "images/Kiturami09.png", lead: "실내 온도 관리를 위한 귀뚜라미 실내온도조절기 제품 카테고리입니다.", summary: "실내온도조절기 카테고리의 제품을 소개합니다. 모델별 구성과 상세 기능은 제품에 따라 다를 수 있습니다." },
        "etc": { name: "기타", image: "images/Kiturami10.png", lead: "그 외 다양한 귀뚜라미 제품 카테고리입니다.", summary: "기타 제품 카테고리를 소개합니다. 세부 제품 구성은 모델별 자료를 확인해주세요." }
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category") || "gas-boiler";
    const product = products[category] || products["gas-boiler"];

    document.title = product.name + " 상세 정보 | Kiturami";
    document.getElementById("detail-title").textContent = product.name;
    document.getElementById("detail-breadcrumb").textContent = product.name;
    document.getElementById("detail-lead").textContent = product.lead;
    document.getElementById("detail-summary-title").textContent = product.name;
    document.getElementById("detail-summary").textContent = product.summary;
    document.getElementById("detail-category").textContent = product.name;
    const image = document.getElementById("detail-image");
    image.src = product.image;
    image.alt = product.name + " 제품 이미지";

    const productCards = document.querySelectorAll(".boiler-product-card");
    const detailInfo = document.getElementById("detail-info");
    const selectedProductName = document.getElementById("selected-product-name");

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            productCards.forEach((item) => item.setAttribute("aria-pressed", String(item === card)));
            selectedProductName.textContent = card.querySelector(".boiler-product-card__name").textContent;
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
                1025: { slidesPerView: 4.7, centeredSlides: false },
                768: { slidesPerView: 2.3, centeredSlides: false },
                0: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 20 }
            }
        });

        const updateCenterProduct = () => {
            const swiperRect = boilerSwiper.el.getBoundingClientRect();
            const centerX = swiperRect.left + swiperRect.width / 2;
            let closestSlide = null;
            let closestDistance = Infinity;

            boilerSwiper.slides.forEach((slide) => {
                slide.querySelector(".boiler-product-card")?.classList.remove("is-center-product");
                const rect = slide.getBoundingClientRect();
                const distance = Math.abs((rect.left + rect.width / 2) - centerX);

                if (rect.right > swiperRect.left && rect.left < swiperRect.right && distance < closestDistance) {
                    closestDistance = distance;
                    closestSlide = slide;
                }
            });

            closestSlide?.querySelector(".boiler-product-card")?.classList.add("is-center-product");
        };

        const showFirstProduct = () => {
            boilerSwiper.slideToLoop(0, 0);
            updateCenterProduct();
        };

        boilerSwiper.on("slideChangeTransitionEnd", updateCenterProduct);
        boilerSwiper.on("resize", updateCenterProduct);
        boilerSwiper.on("setTranslate", updateCenterProduct);
        updateCenterProduct();
        window.addEventListener("load", showFirstProduct);
        window.addEventListener("pageshow", (event) => {
            if (event.persisted) showFirstProduct();
        });
    }

    const familySite = document.getElementById("family-site");
    familySite.addEventListener("change", () => {
        if (familySite.value) window.location.href = familySite.value;
    });
})();