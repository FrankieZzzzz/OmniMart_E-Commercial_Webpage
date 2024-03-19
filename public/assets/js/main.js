
/*=============== SEARCH ===============*/
let searchBtn = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

/*=============== menu show ===============*/
if (searchBtn) {
    searchBtn.addEventListener('click',  () =>{
        searchContent.classList.add('show-search');
    })
}
/*=============== menu hidden ===============*/
if (searchClose) {
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== Login ===============*/
let loginBtn = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');

/*=============== login show ===============*/
if (loginBtn) {
    loginBtn.addEventListener('click',  () =>{
        loginContent.classList.add('show-login');
    })
}
/*=============== login hidden ===============*/
if (loginClose) {
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== home swiper ===============*/
new Swiper('#home__swiper', {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});
/*=============== featured swiper ===============*/
new Swiper('#featured__swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView:2
        },
        1150: {
            slidesPerView:4,
            centeredSlides:false,
        }
    }
});

/*=============== new arrival swiper ===============*/
new Swiper('#new__swiper', {
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
    breakpoints: {
        576: {
            slidesPerView:2
        },
        1150: {
            slidesPerView:4,
        }
    }
});

/*=============== testimonial swiper Autoplay===============*/
new Swiper("#testimonial__swiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
        576: {
            slidesPerView:2
        },
        1150: {
            slidesPerView:4,
            centeredSlides:false,
        }
    }
    });


/*=============== menu show ===============*/
const shadowHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== show scroll up ===============*/
let scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== active linke show ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*='+ sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== dark theme ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-snowflake';
// // previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// // we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-snowflake';

// // if user choose a theme
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}
// // Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== scroll reveal js ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset: true,
    // Animations repeat
})
sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay:200})
sr.reveal(`.services__card`, {interval:50})
sr.reveal(`.discount__data`, {origin:'left'})
sr.reveal(`.discount__images`, {origin:'right'})

// get location
navigator.geolocation.getCurrentPosition(_getCurrentLocation);

function _getCurrentLocation(position){
    let latCode = position.coords.latitude;
    let lonCode = position.coords.longitude;

    var map = L.map('map').setView([latCode, lonCode], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latCode, lonCode]).addTo(map);

    var circle = L.circle([43.64775, -79.39471], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}
_getCurrentLocation()




