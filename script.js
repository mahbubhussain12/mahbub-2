const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.body.classList.toggle('bn', lang === 'bn');
  document.querySelectorAll('[data-en][data-bn]').forEach((element) => {
    const value = element.getAttribute(`data-${lang}`);
    if (value !== null) element.innerHTML = value;
  });
  langToggle.textContent = lang === 'en' ? 'বাংলা' : 'English';
  langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Bangla' : 'Switch to English');
}
langToggle.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'bn' : 'en'));

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
