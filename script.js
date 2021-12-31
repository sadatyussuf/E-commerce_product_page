// A function to check the correctness of the selectors.
const getElement = (selector) => {
const element = document.querySelector(selector)
if (element) return element
throw Error(
    `Please double check your class name, there is no ${selector} class`
)
}


//  constants
const menuBar = getElement('.menu-img')
const closeBar = getElement('.close-img')
const navLinks = getElement('.nav-links')
const prevImg = getElement('.prev')
const nextImg = getElement('.next')
const heroBackgroundImg = getElement('.hero')

const imageList = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg']
const lengthOfImageList =imageList.length -1


// A function to get the current background image
const getBackgroundImage = () => {
    const style = window.getComputedStyle(heroBackgroundImg, false)  
    const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    const imageName = bi.split('/')[4] 
    // console.log(imageName)
    return imageName
}


//  A function that checks the Index of the current image in the imageList and increments or decrements it, to get the next or previous image
const getNextOrPrevImage = (inequalitiesSymbols) => {
    
    const getName = getBackgroundImage()
    let getIndex = imageList.indexOf(getName)
    if (inequalitiesSymbols == '>'){
        if (getIndex >= lengthOfImageList){
        getIndex = -1
        }
        let count = getIndex+1
        return imageList[count]
    }
    else{
        if (getIndex <= 0){
            getIndex = 4
        }
        let count = getIndex-1
        return imageList[count]
    }
}


prevImg.addEventListener('click',()=>{
    const getImage = getNextOrPrevImage('<')
    heroBackgroundImg.style.backgroundImage = `url(./images/${getImage})`
})


nextImg.addEventListener('click',()=>{
    const getImage = getNextOrPrevImage('>')
    heroBackgroundImg.style.backgroundImage = `url(./images/${getImage})`
})


menuBar.addEventListener('click',() =>{
    navLinks.classList.add('show-links')
    document.body.style.background = 'rgba(0, 0, 0, 0.8)'
})


closeBar.addEventListener('click',() =>{
    navLinks.classList.remove('show-links')
    document.body.style.background = 'rgba(0, 0, 0, 0)'
})