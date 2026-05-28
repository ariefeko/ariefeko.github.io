const cursor=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
(function anim(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(anim)})();
document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursor.style.transform='translate(-50%,-50%) scale(2)';ring.style.width='50px';ring.style.height='50px';ring.style.borderColor='rgba(75,86,148,0.7)'});
    el.addEventListener('mouseleave',()=>{cursor.style.transform='translate(-50%,-50%) scale(1)';ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(75,86,148,0.5)'})
});
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target)}})},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
const nav=document.querySelector('nav');
window.addEventListener('scroll',()=>{nav.style.padding=window.scrollY>80?'1rem 4rem':'1.5rem 4rem'});