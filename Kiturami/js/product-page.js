/* Product page: mobile menu toggle, language selector, family site */
(() => {
 const header=document.querySelector(".header");
 const menuToggle=document.querySelector(".menu-toggle");
 const language=document.querySelector(".language");
 const languageToggle=document.querySelector(".language-toggle");
 const languageMenu=document.querySelector(".language-menu");
 const languageCurrent=document.querySelector(".language-current");
 const familySite=document.querySelector("#family-site");
 menuToggle?.addEventListener("click",()=>{const opened=header.classList.toggle("menu-open");menuToggle.setAttribute("aria-expanded",String(opened));menuToggle.setAttribute("aria-label",opened?"메뉴 닫기":"메뉴 열기");});
 document.addEventListener("keydown",event=>{if(event.key==="Escape"){header?.classList.remove("menu-open");menuToggle?.setAttribute("aria-expanded","false");languageToggle?.setAttribute("aria-expanded","false");if(languageMenu)languageMenu.hidden=true;}});
 if(language&&languageToggle&&languageMenu&&languageCurrent){
  languageToggle.addEventListener("click",()=>{const opened=languageToggle.getAttribute("aria-expanded")==="true";languageToggle.setAttribute("aria-expanded",String(!opened));languageMenu.hidden=opened;});
  languageMenu.querySelectorAll(".language-option").forEach(option=>option.addEventListener("click",()=>{languageCurrent.textContent=option.dataset.language;languageMenu.querySelectorAll(".language-option").forEach(item=>item.classList.toggle("is-selected",item===option));languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}));
  document.addEventListener("click",event=>{if(!language.contains(event.target)){languageToggle.setAttribute("aria-expanded","false");languageMenu.hidden=true;}});
 }
 familySite?.addEventListener("change",()=>{if(familySite.value)window.location.href=familySite.value;});
})();
