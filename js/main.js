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


// MENU NAVIGATION

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 58
        const sectionId = section.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// PROJECTS SLIDER


const swiperHtmlCss = document.querySelector('.swiper-html-css')
const swiperJavascript = document.querySelector('.swiper-javascript')
const swiperReact = document.querySelector('.swiper-react')


const createSlide = (slides, container) => {
    slides.forEach(slide => {
        container.innerHTML += `
            <div class='swiper-slide'>
                <div class='projects-content'>
                    <a href=${slide.href} target='_blank'>
                        <img src=${slide.src} alt='${slide.title}' class='projects-img'>
                        <div class="projects-img-title">${slide.title}</div>
                    </a>
                </div>
            </div>
        `
    })
}

createSlide(projectsHtmlCss, swiperHtmlCss)
createSlide(projectsJavascript, swiperJavascript)
createSlide(projectsReact, swiperReact)

let projectsSlider = new Swiper(".projects-swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',
    spaceBetween: 10,
})
