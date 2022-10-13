

// Mobile slideshow //

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    slides[slideIndex-1].style.display = "block";
  }



  // Modals

  const checkoutContainer = document.querySelector('.checkout-container');
  const container = document.querySelector('.main-container');
  const mobileBtns = document.querySelectorAll('.mobile-btn');
  const checkoutModal = document.querySelector('.checkout-modal');


  // Checkout modal

  // toggles checkout modal with nav icons

  mobileBtns.forEach((item) => {


    item.addEventListener('click', () => {

      checkoutModal.classList.toggle('active');
    })
  })

// closes checkout modal when clicking outside
  
checkoutModal.addEventListener('click', (e) => {

  if (e.target !== e.currentTarget) {

    return;

} else {

checkoutModal.classList.remove('active');

}
})

// Mobile menu modal

// toggles mobile menu with hamburger btn

const menuModal = document.querySelector('.modal');
const sideMenu = document.querySelector('.nav-modal');

document.querySelectorAll('.hamburger-btn').forEach((item) => {

  item.addEventListener('click', () => {


     menuModal.classList.toggle('transitionm');
      sideMenu.classList.toggle('transitionwidth');
  })

})

// closes mobile menu when clicking outside
  
menuModal.addEventListener('click', (e) => {

  if (e.target !== e.currentTarget) {

    return;

} else {

 menuModal.classList.toggle('transitionm');
 sideMenu.classList.toggle('transitionwidth');



}
})




// item counter // 

let itemCount = 1;
let itemCounter = document.getElementById('item-counter');

document.getElementById('plus').addEventListener('click', () =>{

  itemCount++;
  itemCounter.innerHTML = itemCount;

})

document.getElementById('remove').addEventListener('click', () => {

  if (itemCount === 0) {
    return;
  }
  itemCount--;
  itemCounter.innerHTML = itemCount;


})

const checkoutBtn = document.getElementById('anim-btn');
const cartCounter = document.getElementById('notification');
const sneakerAmt = document.getElementById('sneaker-amt');
const totalPrice = document.getElementById('price-total');
let sneakerPrice = 125;
let cartCount = 0;

checkoutBtn.addEventListener('click', () => {

  
  cartCount = cartCount + itemCount;

  if (cartCount === 0) {

    return;

  }
  document.getElementById('full').style.display = 'block';
  document.getElementById('empty').style.display = 'none';

    cartCounter.style.display = 'block';
    cartCounter.innerHTML = cartCount;
    sneakerAmt.innerHTML = cartCount;
    totalPrice.innerText = cartCount * 125;
})


document.getElementById('trash').addEventListener('click', () => {

document.getElementById('full').style.display = 'none';
document.getElementById('empty').style.display = 'flex';
cartCount = 0;

cartCounter.innerHTML = 1;
cartCounter.style.display = 'none';


})
