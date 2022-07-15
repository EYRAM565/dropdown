let nav = document.querySelector('.primary-navigation');
let tog = document.querySelector('.toggle')
let bgwrapper = document.querySelector('.wrapper');
let arrowUpdown = document.querySelectorAll('.arrow')

for(let i = 0; i < arrowUpdown.length; i++){
  arrowUpdown[i].addEventListener('click', ()=>{
    arrowUpdown[i].classList.toggle('arrow-up')
  })
   
}

tog.addEventListener('click', ()=>{
    console.log('testing!!!');
    const visibility = nav.getAttribute('data-visible')
    
    if(visibility === 'false'){
        bgwrapper.classList.add('wrapper-bgColor')
        nav.setAttribute('data-visible', true)
        tog.setAttribute('aria-expanded', true)
       
    }else {
        bgwrapper.classList.remove('wrapper-bgColor')
        nav.setAttribute('data-visible', false)
        tog.setAttribute('aria-expanded', false)
    }
})