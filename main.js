const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBugerIcon = document.querySelector('.menu');
const menuShopIcon = document.querySelector('.navbar-shopping-cart');
const productCloseDetail = document.querySelector('.product-detail-close_secondary');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
menuEmail.addEventListener('click', toggleDesktopMenu)
menuBugerIcon.addEventListener('click', toggleMobileMenu)
menuShopIcon.addEventListener('click', toggleCarritoAside)
productCloseDetail.addEventListener('click', closeProductDetail)
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
}
function toggleProductDetail(){
    productDetailContainer.classList.toggle('inactive')
    aside.classList.add('inactive')
    mobileMenu.classList.add('inactive');

}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive')
}
const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: 'Computer',
        price: 170,
        image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: 'Motorcicle',
        price: 1680,
        image: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
)  
{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure> 
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */}


function renderProducts(listProducts){
    for(product of productList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', toggleProductDetail)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    
    
    }
}
renderProducts(productList)