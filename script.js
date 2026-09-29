const header=document.getElementById('header');window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>30));
const hamburger=document.querySelector('.hamburger'),nav=document.querySelector('.nav');hamburger?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.drop>button').forEach(b=>b.addEventListener('click',()=>{if(innerWidth<=820)b.parentElement.classList.toggle('open')}));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
