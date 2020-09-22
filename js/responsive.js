burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navbar_search = document.querySelector('.navbar__search')
navbar__options = document.querySelector('.navbar__options')
more = document.querySelector('.more')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav')
    navbar_search.classList.toggle('v-class')
    navbar__options.classList.toggle('v-class')
    more.classList.toggle('v-class')
})