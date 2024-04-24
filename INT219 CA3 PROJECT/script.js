
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');  /* Now add active class in style sheet*/
    })
}
if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');  /* Now remove active class in style sheet*/
    })
}