const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('header')) closeMenu(); });
window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
// Show the introduction once per tab. CSS also dismisses it without JavaScript.
try {
  if (sessionStorage.getItem('bctwu-visited')) document.querySelector('.loader').classList.add('visited');
  sessionStorage.setItem('bctwu-visited', '1');
} catch { /* CSS handles the introduction when storage is disabled. */ }
const announcements = document.querySelector('#announcements');
const links = ['about.html', 'contact.html', 'safety.html'];
if (announcements && window.SITE) window.SITE.announcements.forEach((item, index) => {
  const card = document.createElement('article');
  card.className = 'notice reveal';
  ['span', 'h3', 'p'].forEach((tag, i) => {
    const element = document.createElement(tag);
    element.textContent = [item.tag, item.title, item.text][i];
    card.append(element);
  });
  const link = document.createElement('a');
  link.className = 'inline-link';
  link.href = links[index % links.length];
  link.innerHTML = 'Explore more <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.5"/></svg>';
  card.append(link);
  announcements.append(card);
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), {threshold: 0.08});
  document.body.classList.add('motion-ready');
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
const header = document.querySelector('header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', updateHeader, {passive: true});
updateHeader();
