const nav = document.querySelector('.primary-navigation');
const tog = document.querySelector('.toggle')

tog.addEventListener('click', ()=>{
    console.log('testing!!!');
    const visibility = nav.getAttribute('data-visible')
    
    if(visibility === 'false'){
        nav.setAttribute('data-visible', true)
        tog.setAttribute('aria-expanded', true)
       
    }else {
        nav.setAttribute('data-visible', false)
        tog.setAttribute('aria-expanded', false)
    }
})