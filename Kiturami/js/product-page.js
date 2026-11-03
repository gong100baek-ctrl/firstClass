/* Product page navigation and category interactions */
(() => {
 const header=document.querySelector(".header");
 const menuToggle=document.querySelector(".menu-toggle");
 const productItem=document.querySelector(".gnb-product");
 const productToggle=productItem?.querySelector("a[aria-controls='product-menu']");
 const productMenu=document.querySelector("#product-menu");
 const language=document.querySelector(".language");
 const languageToggle=document.querySelector(".language-toggle");
 const languageMenu=document.querySelector(".language-menu");
 const languageCurrent=document.querySelector(".language-current");
 const familySite=document.querySelector("#family-site");
 const localLinks=[...document.querySelectorAll(".product-local-nav a")];
 const links=[...localLinks,...(productMenu?[...productMenu.querySelectorAll("a[href^='#']')]:[])];
 const sections=[...new Set(links.map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean))];
 const closeMenu=()=>{header?.classList.remove("mega-menu-open");productMenu?.classList.remove("is-active");productToggle?.setAttribute("aria-expanded","false");};
 const openMenu=()=>{header?.classList.add("mega-menu-open");productMenu?.classList.add("is-active");productToggle?.setAttribute("aria-expanded","true");};
 menuToggle?.addEventListener("click",()=>{const opened=header.classList.toggle("menu-open");menuToggle.setAttribute("aria-expanded",String(opened));menuToggle.setAttribute("aria-label",opened?"메뉴 닫기":"메뉴 열기");if(!opened)closeMenu();});
 if(productItem&&productToggle&&productMenu){
  productToggle.addEventListener("click",event=>{event.preventDefault();productToggle.getAttribute("aria-expanded")==="true"?closeMenu():openMenu();});
  productItem.addEventListener("mouseenter",()=>{if(matchMedia("(min-width: 1025px)").matches)openMenu();});
  productItem.addEventListener("focusin",openMenu);
  header?.addEventListener("mouseleave",()=>{if(matchMedia("(min-width: 1025px)").matches)closeMenu();});
  productMenu.querySelectorAll("a[href^='#']").forEach(link=>link.addEventListener("click",()=>{closeMenu();header?.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");}));
 }
 header?.querySelectorAll(".gnb a:not(.gnb-product > a)").forEach(link=>link.addEventListener("click",()=>{if(matchMedia("(max-width: 1024px)").matches){header.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");closeMenu();}}));
 document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeMenu();header?.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");languageToggle?.setAttribute("aria-expanded","false");if(languageMenu)languageMenu.hidden=true;}});
 document.addEventListener("click",event=>{if(header&&!header.contains(event.target))closeMenu();});
 if(language&&languageToggle&&languageMenu&&languageCurrent){
  languageToggle.addEventListener("click",()=>{const opened=languageToggle.getAttribute("aria-expanded")==="true";languageToggle.setAttribute("aria-expanded",String(!opened));languageMenu.hidden=opened;});
  languageMenu.querySelectorAll(".language-option").forEach(option=>option.addEventListener("click",()=>{languageCurrent.textContent=option.dataset.language;languageMenu.querySelectorAll(".language-option").forEach(item=>item.classList.toggle("is-selected",item===option));languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}));
  document.addEventListener("click",event=>{if(!language.contains(event.target)){languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}});
 }
 familySite?.addEventListener("change",()=>{if(familySite.value)window.location.href=familySite.value;});
 if("IntersectionObserver"in window&&sections.length){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)localLinks.forEach(link=>link.classList.toggle("is-active",link.hash==="#"+entry.target.id));}),{rootMargin:"-22% 0px -65% 0px"});sections.forEach(section=>observer.observe(section));}
 localLinks.forEach(link=>link.addEventListener("click",closeMenu));
})();