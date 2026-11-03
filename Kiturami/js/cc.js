(() => {
 const header=document.querySelector(".header");
 const menuToggle=document.querySelector(".menu-toggle");
 const language=document.querySelector(".language");
 const languageToggle=document.querySelector(".language-toggle");
 const languageMenu=document.querySelector(".language-menu");
 const languageCurrent=document.querySelector(".language-current");
 const familySite=document.querySelector("#family-site");
 const localLinks=[...document.querySelectorAll(".cc-local-nav a")];
 const sections=localLinks.map(link=>document.querySelector(link.getAttribute("href"))).filter(Boolean);
 menuToggle?.addEventListener("click",()=>{const open=header.classList.toggle("menu-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"메뉴 닫기":"메뉴 열기");});
 header?.querySelectorAll(".gnb a").forEach(link=>link.addEventListener("click",()=>{if(matchMedia("(max-width: 1024px)").matches){header.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");}}));
 if(language&&languageToggle&&languageMenu&&languageCurrent){languageToggle.addEventListener("click",()=>{const open=languageToggle.getAttribute("aria-expanded")==="true";languageToggle.setAttribute("aria-expanded",String(!open));languageMenu.hidden=open;});languageMenu.querySelectorAll(".language-option").forEach(option=>option.addEventListener("click",()=>{languageCurrent.textContent=option.dataset.language;languageMenu.querySelectorAll(".language-option").forEach(item=>item.classList.toggle("is-selected",item===option));languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}));document.addEventListener("click",event=>{if(!language.contains(event.target)){languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}});}
 familySite?.addEventListener("change",()=>{if(familySite.value)window.location.href=familySite.value;});
 document.addEventListener("keydown",event=>{if(event.key==="Escape"){header?.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");languageToggle?.setAttribute("aria-expanded","false");if(languageMenu)languageMenu.hidden=true;}});
 if("IntersectionObserver"in window&&sections.length){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)localLinks.forEach(link=>link.classList.toggle("is-active",link.getAttribute("href")==="#"+entry.target.id));}),{rootMargin:"-25% 0px -65% 0px"});sections.forEach(section=>observer.observe(section));}
})();