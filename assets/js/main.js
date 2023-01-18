const openMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.add('menu-opened')
}

const closeMenu = () => {
    let menu = document.querySelector('.nav-menu')

    menu.classList.remove('menu-opened')
}

const links = document.querySelectorAll('.nav-link')
links.forEach(link => link.addEventListener('click', closeMenu))

document.querySelector('.menu-opener').addEventListener('click', openMenu)
document.querySelector('.nav-close').addEventListener('click', closeMenu)


// BACKGROUND HEADER
const backgroundChange = () => {
    let header = document.querySelector('.header')

    if(window.scrollY >= 40){
        header.classList.add('header-bg')
    } else{
        header.classList.remove('header-bg')
    }
}

window.addEventListener('scroll', backgroundChange)

// PROJECT SLIDER

let projectsSlider = new Swiper(".projects-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})