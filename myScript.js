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
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
// Hàm tự động chạy slider sau mỗi khoảng thời gian
function autoSlide() {
  plusSlides(1); // Tăng slideIndex lên 1 để chuyển đến slide tiếp theo
}

let slideInterval = setInterval(autoSlide, 3000);

let sliders = document.querySelectorAll(".warpper_carousel_body");

sliders.forEach((slider) => {
  slider.onmouseover = function () {
    clearInterval(slideInterval);
  };

  slider.onmouseout = function () {
    slideInterval = setInterval(autoSlide, 3000);
  };
});
