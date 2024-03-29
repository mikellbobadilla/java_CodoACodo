
const btnToggle = document.getElementById('btn-toggle')
const navItems = document.getElementById('nav')

btnToggle.addEventListener('click', () => {
    navItems.classList.toggle('visible')
})


