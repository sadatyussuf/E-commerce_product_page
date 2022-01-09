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
const heroImageOverlay = getElement('.hero-container')
const plusIcon = getElement('.plus-icon')
const minusIcon = getElement('.minus-icon')
const digitTag = getElement('.digit')
const coverOverlay = getElement('.cover-body')
const cartIcon = getElement('.cart-icon')
const cartBox = getElement('.cart-box')
const addCart = getElement('.addCart')
const setThumbnail = getElement('.setThumbnail')
const setDigit = getElement('.setDigit')
const setTotalPrice = getElement('.cart-totalPrice')
const cartNumber = getElement('.cartNumber')
const cartEmpty = getElement('.cart-empty')
const cartInfo = getElement('.cart-info')
const trashIcon = getElement('.fa-trash')
const allThumbs = document.querySelectorAll('.thumb-img')

// [].forEach.call(allThumbs, function(thumb) {
//   // do whatever
//   allThumbs.addEventListener('click',(e) =>{
//       console.log(e)

// })
// });






const imageList = ['image-product-1.jpg','image-product-2.jpg','image-product-3.jpg','image-product-4.jpg']

const thumbnailList = ['image-product-1-thumbnail.jpg','image-product-2-thumbnail.jpg','image-product-3-thumbnail.jpg','image-product-4-thumbnail.jpg']

const lengthOfImageList =imageList.length -1


// A function to get the current background image
const getBackgroundImage = (image) => {
    const style = window.getComputedStyle(image, false)  
    const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    const imageName = bi.split('/')[4] 
    // console.log(style)
    return imageName
}

const getImageSRC =  (element) => {
    const imageSrc = element.src
    const imageName = imageSrc.split('/')[4] 
    // console.log(imageName)
    return imageName
}

allThumbs.forEach((thumb) => {
    thumb.addEventListener('click', (e) => {

        currentThumb = e.target

        let getImage = getImageSRC(currentThumb)
        let getIndex = thumbnailList.indexOf(getImage)
        const getBkgdImage = imageList[getIndex]
        heroBackgroundImg.style.backgroundImage = `url(./images/${getBkgdImage})`
        
        // Check if the currentThumb has the active className, if not add the active className to it.
        if(!thumb.classList.contains('active') && e.target ){
        thumb.classList.add('active')
        }
        // Check if the thumb-img list is the currentThumb, if not don't make them active.
        allThumbs.forEach((thumb) =>{
                if(getImageSRC(thumb) != getImageSRC(currentThumb)) {
                    thumb.classList.remove('active')
                }
            })
    });
});

//  A function that checks the Index of the current image in the imageList and increments or decrements it, to get the next or previous image
const getNextOrPrevImage = (inequalitiesSymbols) => {
    
    const getName = getBackgroundImage(heroBackgroundImg)
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


trashIcon.addEventListener('click',() =>{
    cartNumber.innerHTML = 0
    cartNumber.style.visibility = 'hidden'

    cartInfo.classList.add('hide-element')
    cartEmpty.classList.remove('hide-element')
    // cartNumber.classList.
})


addCart.addEventListener('click',()=>{
    const getValue = digitTag.innerHTML
    if (parseInt(getValue)){
    cartEmpty.classList.add('hide-element')
    cartInfo.classList.remove('hide-element')
        
    const getImageName = getBackgroundImage(heroBackgroundImg)
    let getIndex = imageList.indexOf(getImageName)
    const getThumbnail = thumbnailList[getIndex]
    setThumbnail.src = `./images/${getThumbnail}`

    setDigit.innerHTML = getValue
    let calcTotalPrice = 125 * parseInt(getValue)
    setTotalPrice.innerHTML = `$${calcTotalPrice}.00`
    digitTag.innerHTML = 0

    cartNumber.style.visibility = 'visible'
    cartNumber.innerHTML = getValue

    }
    
})

cartIcon.addEventListener('click',()=>{
    cartBox.classList.toggle('show-cartBox')
    // cartNumber.style.visibility = 'hidden'
    const getValue = cartNumber.innerHTML
    // alert(getValue)
    // if (parseInt(getValue)){
        // }
        if (parseInt(getValue)==0){
            cartInfo.classList.add('hide-element')
            cartEmpty.classList.remove('hide-element')
    }
    // const cartInfo 
})


plusIcon.addEventListener('click',() =>{
    const getValue =parseInt(digitTag.innerHTML)
    const count = getValue + 1
    digitTag.innerHTML = count
})


minusIcon.addEventListener('click',() =>{
    const getValue =parseInt(digitTag.innerHTML)
    const count = getValue - 1
    if (count < 0) count = 0
    digitTag.innerHTML = count
})


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
    coverOverlay.classList.add('cover-overlay')
    document.body.style.position = 'fixed'
})


closeBar.addEventListener('click',() =>{
    navLinks.classList.remove('show-links')
    coverOverlay.classList.remove('cover-overlay')
    document.body.style.position = 'static'
})