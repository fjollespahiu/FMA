const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');

start_btn.addEventListener('click', ()=>{
    info_box.classList.add('activeInfo');
})