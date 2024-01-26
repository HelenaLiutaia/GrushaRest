const foto = document.querySelectorAll('.header');
foto.forEach(photographer =>{
    photographer.addEventListener('mouseover', ()=>{
        removeFocus();
        photographer.classList.add('selected');
    })
    removeFocus=()=>{
    foto.forEach(photographer=>{
        photographer.classList.remove('selected');
    })
    }
})
gsap.from('.aboutOne',{x:400, delay:0.5, duration:2,opacity:0})
gsap.from('.aboutTwo',{x:200, delay:1.8, duration:2,opacity:0})
gsap.from('.OnePage',{x:200, delay:2, duration:2,opacity:0})
gsap.from('.btnNew',{x:200, delay:2.2, duration:2,opacity:0})

