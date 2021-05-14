// Menu show y hidden//
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav_toggle'),
closeMenu = document.getElementById('nav-close')

//show//
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})
//Hidden//
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

//remove menu//
const navLink=document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

//scroll sections active link//
const sections=document.querySelectorAll('select[id]')

window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY= window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight 
        const sectionTop = current.offsetTop - 50
        sectionId= current.getAttribute('id')

        if(scrollY> sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelectorAll('.nav_menu a[href*='+sectionId+']').classList.add('active')
        } else{
            document.querySelectorAll('.nav_menu a[href*='+sectionId+']').classList.remove('active')
        }

    })
}