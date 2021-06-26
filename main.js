// toggle
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const div of toggle) {
  div.addEventListener('click', () => nav.classList.toggle('show'))
}
// hide menu with items

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// testimonials swiper/slider/carrousel
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },
  mousewheel: false,
  Keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social

  `,
  { interval: 100 }
)

// arrow
const arrowButton = document.querySelector('.arrow')

function arrow() {
  if (window.scrollY >= 700) {
    arrowButton.classList.add('show')
  } else {
    arrowButton.classList.remove('show')
  }
}

// header shadow
const header = document.querySelector('#header')

function headerShadow() {
  const navHeight = header.offsetHeight

  if (scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// menu selected for each page
const sections = document.querySelectorAll('main section[id]')

function menuColor() {
  const checkpoint = window.pageYOffset + window.innerHeight / 2
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// inventando moda

// calling functions

window.addEventListener('scroll', () => {
  arrow()
  headerShadow()
  menuColor()
})
