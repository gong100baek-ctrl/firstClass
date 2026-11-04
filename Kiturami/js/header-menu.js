/* Shared hover and keyboard navigation for header mega menus */
(() => {
 const header=document.querySelector(".header");
 if(!header)return;
 const triggers=[...header.querySelectorAll(".gnb-item > a[data-menu-id]")];
 const menus=[...header.querySelectorAll(".mega-menu")];
 let closeTimer=null;
 const desktop=()=>window.matchMedia("(min-width: 1025px)").matches;
 const closeMenus=()=>{
  clearTimeout(closeTimer);
  header.classList.remove("mega-menu-open");
  menus.forEach(menu=>menu.classList.remove("is-active"));
  triggers.forEach(trigger=>trigger.setAttribute("aria-expanded","false"));
 };
 const openMenu=trigger=>{
  const id=trigger.dataset.menuId;
  if(!id)return;
  clearTimeout(closeTimer);
  menus.forEach(menu=>menu.classList.toggle("is-active",menu.id===id));
  header.classList.add("mega-menu-open");
  triggers.forEach(item=>item.setAttribute("aria-expanded",String(item===trigger)));
 };
 triggers.forEach(trigger=>{
  const item=trigger.closest(".gnb-item");
  item?.addEventListener("mouseenter",()=>{if(desktop())openMenu(trigger);});
  item?.addEventListener("mouseleave",()=>{if(desktop())closeTimer=setTimeout(closeMenus,140);});
  trigger.addEventListener("focus",()=>{if(desktop())openMenu(trigger);});
  trigger.addEventListener("click",()=>{if(!desktop())closeMenus();});
 });
 menus.forEach(menu=>{
  menu.addEventListener("mouseenter",()=>clearTimeout(closeTimer));
  menu.addEventListener("mouseleave",()=>{if(desktop())closeTimer=setTimeout(closeMenus,140);});
  menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenus));
 });
 header.addEventListener("mouseleave",()=>{if(desktop())closeTimer=setTimeout(closeMenus,140);});
 header.addEventListener("mouseenter",()=>clearTimeout(closeTimer));
 document.addEventListener("click",event=>{if(!header.contains(event.target))closeMenus();});
 document.addEventListener("keydown",event=>{if(event.key==="Escape")closeMenus();});
 window.addEventListener("resize",()=>{if(!desktop())closeMenus();});
})();