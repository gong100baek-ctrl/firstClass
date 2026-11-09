/* 로컬 내비게이션 select: #앵커는 부드럽게 이동 + 스크롤 위치 동기화, 그 외 값은 페이지 이동 */
(() => {
  document.querySelectorAll(".local-select").forEach((select) => {
    const options = [...select.options];
    const hashes = options.filter((o) => o.value.startsWith("#"));
    const sections = hashes.map((o) => document.querySelector(o.value)).filter(Boolean);
    select.addEventListener("change", () => {
      const value = select.value;
      if (!value.startsWith("#")) { window.location.href = value; return; }
      const target = document.querySelector(value);
      if (!target) return;
      const nav = select.closest(".local-nav");
      const offset = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(null, "", value);
    });
    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hashes.some((o) => o.value === "#" + entry.target.id)) select.value = "#" + entry.target.id;
        });
      }, { rootMargin: "-22% 0px -65% 0px" });
      sections.forEach((s) => observer.observe(s));
    }
  });
})();
