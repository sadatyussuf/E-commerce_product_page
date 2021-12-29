const getElement = (selector) => {
const element = document.querySelector(selector)

if (element) return element
throw Error(
    `Please double check your class name, there is no ${selector} class`
)
}

const menuBar = getElement('.menu-img')
const closeBar = getElement('.close-img')

const navLinks = getElement('.nav-links')

menuBar.addEventListener('click',() =>{
    // alert('added')
    navLinks.classList.add('show-links')
    document.body.style.background = 'rgba(0, 0, 0, 0.8)'
    
})
closeBar.addEventListener('click',() =>{
    navLinks.classList.remove('show-links')
    document.body.style.background = 'rgba(0, 0, 0, 0)'
})