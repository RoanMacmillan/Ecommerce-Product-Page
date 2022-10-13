

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

document.querySelectorAll('.hamburger-btn').forEach((item) => {

  item.addEventListener('click', () => {

    menuModal.classList.toggle('active');

  })

})

// closes mobile menu when clicking outside
  
menuModal.addEventListener('click', (e) => {

  if (e.target !== e.currentTarget) {

    return;

} else {

menuModal.classList.remove('active');

}
})