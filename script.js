

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
    let thumbnails = document.getElementsByClassName("column-img");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
    
    thumbnails[slideIndex-1].className += " active";

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

 menuModal.classList.remove('transitionm');
 sideMenu.classList.remove('transitionwidth');



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




// Lightbox slideshow //



// Mobile slideshow //

let slideIndexLight = 1;
showSlidesLight(slideIndexLight);

// Next/previous controls
function plusSlidesLight(n) {
  showSlidesLight(slideIndexLight += n);
}

function currentSlideLight(n) {
  showSlidesLight(slideIndexLight = n);
}

function showSlidesLight(n) {
    let i;
    let slidesLight = document.getElementsByClassName("mySlidesLight");
    let thumbnailsLight = document.getElementsByClassName("column-img-light");

    if (n > slidesLight.length) {slideIndexLight = 1}
    if (n < 1) {slideIndexLight = slidesLight.length}
    for (i = 0; i < slidesLight.length; i++) {
      slidesLight[i].style.display = "none";
    }
    for (i = 0; i < thumbnailsLight.length; i++) {
      thumbnailsLight[i].className = thumbnailsLight[i].className.replace(" active", "");
  }


    slidesLight[slideIndexLight-1].style.display = "block";
    thumbnailsLight[slideIndexLight-1].className += " active";

  }







  const lightModal = document.getElementById('lightbox-modal');



document.getElementById('slide-wrap').addEventListener('click', () => {


  lightModal.classList.add('active-light');

})





  lightModal.addEventListener('click', (e) => {

    if (e.target !== e.currentTarget) {
  
      return;
  
  } else {
  
  lightModal.classList.remove('active-light');
  
  }
  })


  document.getElementById('light-x').addEventListener('click', () => {

    lightModal.classList.remove('active-light');



  })



  