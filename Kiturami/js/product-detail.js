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

    let productCards = document.querySelectorAll(".boiler-product-card");
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
        const oilNames = [
            "스텐 하이핀 BLUE 기름보일러",
            "스텐 하이핀 eco 기름보일러",
            "터보 하이핀 eco 기름보일러",
            "거꾸로 콘덴싱 eco 기름보일러",
            "스텐 하이핀 L10 기름보일러",
            "스텐 하이핀 N 기름보일러"
        ];
        Array.from(productCards).forEach((card, index) => {
            const slide = card.closest(".swiper-slide");
            if (index >= oilNames.length) { if (slide) slide.style.display = "none"; return; }
            if (slide) slide.style.display = "";
            const img = card.querySelector(".boiler-product-card__image img");
            img.src = "images/oil_" + (index + 1) + ".png";
            img.alt = oilNames[index];
            card.querySelector(".boiler-product-card__name").textContent = oilNames[index];
        });
        const sectionHeading = document.querySelector(".boiler-products .detail-section-heading");
        if (sectionHeading) {
            sectionHeading.querySelector(".detail-eyebrow").textContent = "OIL BOILER LINEUP";
            sectionHeading.querySelector("h3").textContent = "기름보일러 제품";
        }
    }
    // 온수기 ~ 기타: krb.co.kr 제품 목록의 제품명/이미지를 그대로 사용 (이미지 경로가 null이면 준비 중 카드)
    const KRB_IMG = "https://krb.co.kr/files/attach/images/";
    const lineups = {
        "water-heater": {
            eyebrow: "WATER HEATER LINEUP", title: "온수기 제품",
            items: [
                ["저장식 전기온수기(스테인리스)", "556/911/026/776d1a65a7445149f2c6cc0f48b8cd84.png"],
                ["저장식 전기온수기 (법랑)", "556/766/5a231c4855fdba77e3a5242b4e3b3891.png"],
                ["심야 전기 온수기", "556/744/96c306271d20c671cad6e418239cef2b.png"],
                ["트윈알파 가스온수기", "556/935/021/49eb60d252864c4589073a4c6730e1d7.png"],
                ["중형 전기온수기", "556/485/025/60fdcb5590c007d9c0cc010713249412.png"]
            ]
        },
        "renewable": {
            eyebrow: "RENEWABLE / COMMERCIAL / ELECTRIC LINEUP", title: "신재생/중대형/전기 제품",
            items: [
                ["거꾸로 타는 화목보일러", "554/661/4fb42d9a69d35f130f23306f2348d31e.png"],
                ["화목보일러(일반형)", "554/615/1c7a89ec1bba8e10eb40ec6d78f07e4b.png"],
                ["축열식 화목보일러", "554/642/e1d8f53787b6b7806b757def4d9985d9.png"],
                ["하이브리드 화목보일러", "554/626/cc51d2b53d81c72ad42cc07a8a522bbc.png"],
                ["가정용 펠릿보일러", "554/806/7d7b22d667705ab49f9b8f54c0eac78f.png"],
                ["스텐레스 하이핀 중형보일러", "554/001/001/b6949b6644f2650a98bc3e9f73632a22.png"],
                ["중형 하이핀 보일러", "554/682/e5439ad0245c6cd40d3d4a4c75baaf9b.png"],
                ["입형 중형보일러", "554/692/1b5cb0ce6cb2c0a2ec16903ebf80441b.png"],
                ["소형 전기보일러(KSE 시리즈)", "554/728/025/a1f4d2ca8dd9717b223c09f5246f4ccb.png"],
                ["저탕식 전기보일러", "554/210/023/17f5d10cfb263a727952caa92c3787cf.png"]
            ]
        },
        "heating-mat": {
            eyebrow: "HEATING MAT LINEUP", title: "난방매트 제품",
            items: [
                ["귀뚜라미 카본보드 온돌", "6930/117/022/e782693c7e88113c8a7be4fa15a16943.png"],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(블랙)", "6930/390/022/82a6b19374776e68ab33d7fa29055465.png"],
                ["귀뚜라미 카본매트 온돌 고급형 KMC 시리즈(실버)", "6930/395/022/5d5915f19af83c17d9464f0dfe2a5cb9.png"],
                ["귀뚜라미 카본매트 온돌 고급형 92 시리즈", "6930/594/020/44bf7e304800cd92d5ef6c72deac2027.png"],
                ["귀뚜라미 카본매트 온돌 고급형 87N/NA 시리즈", "6930/339/022/3fa676d91a0bbe73a3ae007b786c588d.png"]
            ]
        },
        "system": {
            eyebrow: "SYSTEM PRODUCT LINEUP", title: "시스템 제품",
            items: [
                ["귀뚜라미 온수열원 시스템", "6939/881/019/27568ff0869a1cde8b826217e6fbb58b.png"],
                ["귀뚜라미 IoT 월패드 & 각방제어시스템", "6939/164/004/87178ef9bc46fc778430523ad0cd92ee.png"],
                ["각방제어구동기/ 밸브제어기", "6939/061/010/2205b189cdafe98781984edb9d63940b.png"],
                ["귀뚜라미 각방제어시스템", "6939/680/013/463ebc87c7e2ed2b43c85da368ce6549.png"],
                ["거꾸로 콘덴싱 프리미엄 온수기", "6939/820/008/b8f6e268a185916c17f6123980a2dd91.png"],
                ["거꾸로 콘덴싱 스탠다드 온수기", "6939/603/018/30f0a548a3c95679e374196b605a1238.png"],
                ["거꾸로 콘덴싱 난방전용보일러", "6939/834/008/3b644731ea5b14b1cb5cb0c45ffd5efa.png"],
                ["귀뚜라미 온수플러스+ 시스템", "6939/067/024/33c0c2fd7b46fe6c5864454e347ed1a3.png"],
                ["귀뚜라미보일러 AI 방방 난방 시스템", "6939/657/027/9b2b264149cd0d3abc7b745202d5501f.png"]
            ]
        },
        "air-care": {
            eyebrow: "AIR CARE / VENTILATION LINEUP", title: "공기청정/환기 제품",
            items: [
                ["귀뚜라미 환기 플러스+ 공기청정시스템", "14882/976/014/c17d1cb88aca97d53da32a160a636f87.png"]
            ]
        },
        "air-conditioner": {
            eyebrow: "AIR CONDITIONER LINEUP", title: "에어컨 제품",
            items: [
                ["2026년형 귀뚜라미 창문형 에어컨 (KAB-35W)", "946/814/026/c9ddf8b0629b5458dd9d860a62e3d98c.png"],
                ["2025년형 귀뚜라미 창문형 에어컨 (KAA-35W)", "946/666/025/274eabbc3bbcbecae4c18715f43b3966.png"],
                ["2023년형 귀뚜라미 창문형 에어컨 (KAA-15W)", "946/963/021/ad4f41890c42d3e5b78043cd7d79ad26.png"]
            ]
        },
        "thermostat": {
            eyebrow: "ROOM THERMOSTAT LINEUP", title: "실내온도조절기 제품",
            items: [
                ["IoT 실내온도조절기", "948/051/013/f4daab29442b5dfe4b2b21ef1792b703.png"],
                ["NCTR-60 Wifi /NCTR-60W Wifi", "948/461/013/8e80e3ddd56239d009d4cc9e74f8e352.png"],
                ["NCTR-100C Wifi", "948/103/013/05fbbabe17a3e87b7740e0129f121f49.png"],
                ["NCTR-200 Wifi", "948/445/021/54479ab8c95edaf8639713e02a1a3baa.png"],
                ["NRS-1200WF", "948/108/019/d6397de18e8064c8e5b9894ea5b36924.png"],
                ["NRS-70WF", "948/230/013/3501d13bd3093fc8df7428333989d275.png"],
                ["NCTR-10 Wifi", "948/040/012/0e084f431369ce415dfd461ad59e8499.png"],
                ["NCTR-60S", "948/559/022/1c065439f2259e78aa66a45421fffdb4.png"],
                ["NCTR-70", "948/312/020/166ff4acd7fa80790d422c177b994ab2.png"],
                ["CTR-15 Wifi", "948/109/011/52ab99eef6fbac91ea97a0495e265e3a.png"],
                ["NCTR-60W", "948/077/019/cb9817b4f8463e28b4763415218cbe67.png"],
                ["CTR-65 Wifi", "948/413/015/a24070fccc738b76c085398bc806a814.png"],
                ["NCTR-7100", "948/850/026/8df7a807c890a4aa09f39d147dcdedd5.png"],
                ["NCTR-100B/ 100", "948/085/019/95663cfe3a29b4bf3e2422592dd6e7dc.png"],
                ["NCTR-6000", "948/324/012/809338315367c9242223898aaebdcdc6.png"],
                ["NCTR-60", "948/437/013/97a5ec1df31b8a435b550d97c9bffcde.png"],
                ["NCTR-6100", "948/889/012/b060cb77b34dbce6c3dcd42ee1a93129.png"],
                ["NCTR-50N", "948/820/011/6bbe4a212f946a3ec8bddce35876d320.png"],
                ["NCTR-5000", "948/335/010/a61e68d6358c311ad14e2b7765629dc0.png"],
                ["CTR-5700PLUS", "948/046/001/092f66a355676ee18fc27328fc690088.png"],
                ["CTR-5000", "948/038/001/0c565b25cba70c3f40cc8855f39eef60.png"],
                ["CTR-6070", "948/054/001/a6411d7e94983794286b75a9d5cd5c26.png"],
                ["HOT-2000", "948/074/001/6ff20c1a697412ecd0f23332c8c54d47.png"],
                ["HOT-300", "948/066/001/73202f4241b4454eea387f68973430e5.png"]
            ]
        },
        "etc": {
            eyebrow: "OTHER PRODUCT LINEUP", title: "기타 제품",
            items: [
                ["세이프온 일산화탄소(CO) 경보기", null],
                ["귀뚜라미 펌프", null],
                ["팬코일 유닛", null]
            ]
        }
    };

    const renderLineup = (lineup) => {
        const wrapper = document.querySelector(".boiler-swiper .swiper-wrapper");
        if (!wrapper) return;
        wrapper.textContent = "";
        lineup.items.forEach(([name, path], index) => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";
            const card = document.createElement("button");
            card.className = "boiler-product-card";
            card.type = "button";
            card.dataset.productIndex = String(index + 1);
            card.setAttribute("aria-pressed", "false");
            const imageBox = document.createElement("span");
            imageBox.className = "boiler-product-card__image";
            const showPlaceholder = () => {
                imageBox.textContent = "";
                const placeholder = document.createElement("span");
                placeholder.textContent = "이미지 준비 중";
                imageBox.appendChild(placeholder);
            };
            if (path) {
                const img = document.createElement("img");
                img.src = KRB_IMG + path;
                img.alt = name;
                img.loading = "lazy";
                img.referrerPolicy = "no-referrer";
                img.addEventListener("error", showPlaceholder);
                imageBox.appendChild(img);
            } else {
                showPlaceholder();
            }
            const label = document.createElement("span");
            label.className = "boiler-product-card__name";
            label.textContent = name;
            card.append(imageBox, label);
            slide.appendChild(card);
            wrapper.appendChild(slide);
        });
        const heading = document.querySelector(".boiler-products .detail-section-heading");
        if (heading) {
            heading.querySelector(".detail-eyebrow").textContent = lineup.eyebrow;
            heading.querySelector("h3").textContent = lineup.title;
        }
        productCards = document.querySelectorAll(".boiler-product-card");
    };
    if (lineups[category]) renderLineup(lineups[category]);

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
            loop: document.querySelectorAll(".boiler-swiper .swiper-slide").length > 6,
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