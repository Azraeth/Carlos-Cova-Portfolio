const UI={themeButton:document.querySelector(".switch"),navbar:document.querySelector('nav'),navLinks:document.querySelectorAll('nav a'),navbarToggle:document.querySelector('.navbar-toggle'),langWord:document.querySelector('.lang'),aside:document.querySelector('aside'),asideToggle:document.querySelector('.aside-toggle'),toTopButton:document.getElementById('toTopButton'),tabsContainer:document.querySelector('[data-tabs-container]')};document.addEventListener("DOMContentLoaded",()=>{initTheme();initTabs();initNavbar();initAside();initToTopButton()});function initTheme(){const loadStatus=localStorage.getItem("darkMode")==="true";if(loadStatus){UI.themeButton.classList.add("drkModeOn");document.body.classList.add("drkModeOn")}
UI.themeButton.addEventListener("click",()=>{const isDarkMode=UI.themeButton.classList.toggle("drkModeOn");document.body.classList.toggle("drkModeOn");localStorage.setItem("darkMode",isDarkMode)})}
function initTabs(){if(!UI.tabsContainer)return;UI.tabsContainer.addEventListener('click',(event)=>{const tabButton=event.target.closest('[data-tab]');if(!tabButton)return;const targetTab=tabButton.dataset.tab;const tabButtons=UI.tabsContainer.querySelectorAll('button[data-tab]');const tabSections=UI.tabsContainer.querySelectorAll('section[data-tab]');tabButtons.forEach(btn=>btn.dataset.active="false");tabSections.forEach(section=>section.dataset.active="false");tabButton.dataset.active="true";UI.tabsContainer.querySelector(`section[data-tab="${targetTab}"]`).dataset.active="true"})}
function initToTopButton(){if(!UI.toTopButton)return;UI.toTopButton.addEventListener('click',()=>{const topSection=document.querySelector('.skills');if(topSection){topSection.scrollIntoView({behavior:'smooth'})}})}
function initNavbar(){if(!UI.navbar||!UI.navbarToggle)return;const isIndex=window.location.pathname.includes('index')||window.location.pathname==='/';function updateLangWord(isActive){if(!UI.langWord)return;const svg=UI.langWord.querySelector('svg')?.outerHTML||'';UI.langWord.innerHTML=svg+(isActive?(isIndex?'ESPAÑOL':'ENGLISH'):(isIndex?'ES':'EN'))}
UI.navbarToggle.addEventListener('click',()=>{const isActive=UI.navbar.classList.toggle('active');updateLangWord(isActive);const arrow=UI.navbarToggle.querySelector('svg');if(arrow){arrow.style.transform=isActive?'rotate(180deg)':'rotate(0)'}});document.addEventListener('click',(e)=>{if(!UI.navbar.contains(e.target)&&!UI.navbarToggle.contains(e.target)&&UI.navbar.classList.contains('active')){UI.navbar.classList.remove('active');updateLangWord(!1);const arrow=UI.navbarToggle.querySelector('svg');if(arrow){arrow.style.transform='rotate(0)'}}});UI.navbar.addEventListener('click',(e)=>{if(e.target.tagName==='A'&&UI.navbar.classList.contains('active')){UI.navbar.classList.remove('active');updateLangWord(!1);const arrow=UI.navbarToggle.querySelector('svg');if(arrow){arrow.style.transform='rotate(0)'}}})}
function initAside(){if(!UI.aside||!UI.asideToggle)return;function toggleAside(){const isActive=UI.aside.classList.toggle('active');const userIcon=UI.asideToggle.querySelector('svg');if(userIcon){userIcon.classList.toggle('interact',isActive)}}
UI.asideToggle.addEventListener('click',toggleAside);UI.aside.addEventListener('click',(e)=>{if(e.target===UI.aside){UI.aside.classList.remove('active');const userIcon=UI.asideToggle.querySelector('svg');if(userIcon){userIcon.classList.remove('interact')}}});UI.asideToggle.classList.add('initial-load');UI.asideToggle.addEventListener('click',()=>{UI.asideToggle.classList.remove('initial-load')},{once:!0})}