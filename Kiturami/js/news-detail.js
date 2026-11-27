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
    const summary = $("news-summary");
    if (item.summary && item.summary.length) {
        item.summary.forEach((text) => { const li = document.createElement("li"); li.textContent = text; summary.appendChild(li); });
        summary.hidden = false;
        $("news-note").textContent = "※ 보도자료의 핵심 내용을 정리한 요약입니다.";
    } else {
        $("news-note").textContent = "상세 내용은 준비 중입니다. 제목과 게시일은 홍보센터 목록 기준입니다.";
    }
    const link = (el, n) => { if (!n) return; el.href = "news.html?id=" + n.id; el.title = n.title; el.hidden = false; };
    // 목록은 최신순입니다. ‘다음 소식’은 더 오래된 기사로, ‘이전 소식’은 방금 지나온 더 최근 기사로 돌아갑니다.
    link($("news-prev"), list[index - 1]);
    link($("news-next"), list[index + 1]);
})();
