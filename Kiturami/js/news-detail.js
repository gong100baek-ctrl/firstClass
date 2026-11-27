// 홍보센터 > 소식 상세 (news.html?id=27998)
(() => {
    const list = window.KITURAMI_NEWS || [];
    const id = new URLSearchParams(location.search).get("id");
    let index = list.findIndex((n) => n.id === id);
    if (index < 0) index = 0;
    const item = list[index];
    if (!item) return;
    const $ = (key) => document.getElementById(key);
    const date = item.date.replace(/-/g, ".");
    document.title = item.title + " | 홍보센터 | Kiturami";
    $("news-meta").textContent = "NEWS · " + item.label + " · " + date;
    $("news-title").textContent = item.title;
    $("news-lead").textContent = item.title;
    $("news-image").alt = item.title;
    const link = (el, n) => { if (!n) return; el.href = "news.html?id=" + n.id; el.title = n.title; el.hidden = false; };
    link($("news-prev"), list[index + 1]);
    link($("news-next"), list[index - 1]);
})();
