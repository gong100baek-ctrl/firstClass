// 1:1 문의 (UI 예시) - 입력 내용은 이 브라우저(localStorage)에만 보관되며 서버로 전송되지 않습니다.
(() => {
    const KEY = "kiturami-inquiries";
    const form = document.getElementById("inq-form");
    const note = document.getElementById("inq-note");
    const box = document.getElementById("inq-history");
    const list = document.getElementById("inq-list");
    const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } };
    const write = (items) => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} };
    const render = () => {
        const items = read();
        list.textContent = "";
        box.hidden = !items.length;
        items.forEach((it) => {
            const li = document.createElement("li");
            const strong = document.createElement("strong");
            strong.textContent = it.title;
            const meta = document.createElement("span");
            meta.textContent = it.type + " · " + it.date + " · 접수번호 " + it.no;
            li.append(strong, meta);
            list.appendChild(li);
        });
    };
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const now = new Date();
        const no = "Q" + String(now.getTime()).slice(-8);
        const items = read();
        items.unshift({ no, type: data.get("type"), title: data.get("title"), date: now.toLocaleDateString("ko-KR") });
        write(items.slice(0, 10));
        note.textContent = "문의 내용이 확인되었습니다. (접수번호 " + no + ") 실제 접수는 고객센터 1588-9000으로 문의해 주세요.";
        form.reset();
        render();
    });
    render();
})();
