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

let projectsHtmlCss = [
    {title: 'Hallowen', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/halloween/', src: '../assets/images/projects/halloween.png'},
    {title: 'Projeto Social', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/projeto-social/', src: '../assets/images/projects/social.png'},
    {title: 'Blackboard', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/blackboard/', src: '../assets/images/projects/blackboard.png'},
    {title: 'Gym', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/gym/', src: '../assets/images/projects/gym.png'},
    {title: 'Awax', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/Awax/', src: '../assets/images/projects/awax.png'},
    {title: 'Riot', href: 'https://arthur-gsilva.github.io/projetos-html-e-css/lol-login/', src: '../assets/images/projects/riot.png'}
]

let projectsJavascript = [
    {title: 'Games Room', href: 'https://games-room7gd.netlify.app/', src: '../assets/images/projects/games-room.png'},
    {title: 'Calculadora IMC', href: 'https://imcalc-calculator.netlify.app/', src: '../assets/images/projects/calculadora-imc.png'},
    {title: 'Pokédex', href: 'https://arthur-gsilva.github.io/projetos-javascript/pokedex/', src: '../assets/images/projects/pokedex.png'},
    {title: 'clima', href: 'https://arthur-gsilva.github.io/projetos-javascript/clima/', src: '../assets/images/projects/clima.png'},
    {title: 'Music Player', href: 'https://arthur-gsilva.github.io/projetos-javascript/music-player/', src: '../assets/images/projects/music-player.png'},
    {title: 'Validador de form', href: 'https://arthur-gsilva.github.io/projetos-javascript/validador-de-form/', src: '../assets/images/projects/validator.png'},
    {title: 'Todo List', href: 'https://arthur-gsilva.github.io/projetos-javascript/todo/', src: '../assets/images/projects/todo.png'}
]

let projectsReact = [
    {title: 'Calculadora IMC', href: 'https://calculator-imc-two.vercel.app/', src: '../assets/images/projects/calculadora-imc-react.png'},
    {title: 'Todo List', href: 'https://react-todo-list-nu-seven.vercel.app/', src: '../assets/images/projects/todo-list-react.png'},
    {title: 'Movies', href: 'https://react-movies-chi.vercel.app/', src: '../assets/images/projects/react-movies.png'}
]

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
