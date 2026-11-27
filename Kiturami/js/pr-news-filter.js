// 홍보센터 소식 목록 분류 탭
(() => {
    const tabs = document.querySelectorAll(".pr-news-tabs button");
    const items = document.querySelectorAll("#pr-news-list li");
    tabs.forEach((tab) => tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
        items.forEach((li) => { li.hidden = tab.dataset.filter !== "ALL" && li.dataset.category !== tab.dataset.filter; });
    }));
})();
