const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links');
burger.addEventListener('click',()=>nav.classList.toggle('active'));

if(document.querySelector('.hero')){
  gsap.from(".hero h1",{duration:1,y:-50,opacity:0});
  gsap.from(".hero p",{duration:1,delay:0.5,y:50,opacity:0});
  gsap.from(".btn",{duration:1,delay:1,scale:0,opacity:0});
}
