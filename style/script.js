const shop = document.querySelectorAll('.shop')

shop[0].addEventListener('click', function () {
    window.location.href = 'detailProduk.html'
})

function MobileResponsive() {
    return window.innerWidth <= 850
}

if(MobileResponsive()) {
    
    // style header 1
    const header1 = document.querySelector('.header1-list')
    header1.style.flexDirection = 'column'

    const header1Menu = document.querySelector('.header1-menu')
    header1Menu.style.display = 'flex'
    header1Menu.style.flexDirection = 'column'

    // categories style
    const cardCategories = document.querySelectorAll('.card-categories')
    const cardCategoriesImg = document.querySelectorAll('.card-categories img')
    const desCardCategories = document.querySelectorAll('.card-categories span')
    const categoriesList = document.querySelector('.categories-list')
    
    for(i = 0; i < 8; i++) {
        cardCategories[i].style.height = '90px'
        cardCategories[i].style.width = '180px'
        
        cardCategoriesImg[i].style.height = '90px'
        desCardCategories[i].style.fontSize = '12px'
        categoriesList.style.gap = '6px'
        
        desCardCategories[i].className = 'mt-3'
        cardCategories[i].className = 'card-categories d-flex gap-2 mb-5'

    }

    // Deal of the day style
    const cardDeal = document.querySelectorAll('.card-deal-of-the-day')

    for(i = 0; i < 10; i++) {
        cardDeal[i].className = '.card-deal-of-the-day ps-2 pe-2'
    } 
}