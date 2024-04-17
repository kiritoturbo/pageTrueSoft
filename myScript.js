let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("warpper_carousel_body");
  let dots = document.getElementsByClassName("item_dot_carousel");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  if (slides.length !== 0 && dots.length !== 0) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  }
}
// Hàm tự động chạy slider sau mỗi khoảng thời gian
function autoSlide() {
  plusSlides(1); // Tăng slideIndex lên 1 để chuyển đến slide tiếp theo
}

let slideInterval = setInterval(autoSlide, 100000);

let sliders = document.querySelectorAll(".warpper_carousel_body");

sliders.forEach((slider) => {
  slider.onmouseover = function () {
    clearInterval(slideInterval);
  };

  slider.onmouseout = function () {
    slideInterval = setInterval(autoSlide, 3000);
  };
});

// menu mobile
let NavbarMobile = document.querySelector(".navbar_mobile");
let OverLay = document.querySelector(".overlay");
let IconMenuMobile = document.querySelector(".navbar_menu_icon");
let bodyHTML = document.querySelector("body");

IconMenuMobile.addEventListener("click", function (e) {
  e.preventDefault();
  OverLay.style.display = "block";
  NavbarMobile.style.left = "0";
  bodyHTML.style.overflow = "hidden";
});
OverLay.addEventListener("click", function () {
  NavbarMobile.style.left = "-100%";
  OverLay.style.display = "none";
  bodyHTML.style.overflow = "auto";
});
