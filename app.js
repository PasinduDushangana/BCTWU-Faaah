const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
 const open = document.querySelector('nav').classList.toggle('open');
 menu.setAttribute('aria-expanded', String(open));
});
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(a => { if(a.getAttribute('href') === current){a.classList.add('active');a.setAttribute('aria-current','page');} });
const announcements = document.querySelector('#announcements');
if(announcements) window.SITE.announcements.forEach(item => {
 const card = document.createElement('article');
 ['span','h3','p'].forEach((tag,i) => {const el=document.createElement(tag);el.textContent=[item.tag,item.title,item.text][i];card.append(el);});
 announcements.append(card);
});
if ('IntersectionObserver' in window) {
 const observer=new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
 document.querySelectorAll('.cards article,.split,.callout').forEach(el=>{el.classList.add('reveal');observer.observe(el);});
}
document.addEventListener('keydown', e=>{if(e.key==='Escape'){document.querySelector('nav').classList.remove('open');menu.setAttribute('aria-expanded','false');}});
