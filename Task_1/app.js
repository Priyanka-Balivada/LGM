var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var slideIndex = 1;
var slideLeft = document.getElementById('prev');
var slideRight = document.getElementById('next');
var lifeimg = document.getElementsByClassName('Img-Life')
var len = lifeimg.length;

window.onscroll = function() {
  scroll()
};

showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slide_window = document.getElementsByClassName("Sliding_Window");
  var indicator = document.getElementsByClassName("indicators");
  if (n > slide_window.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide_window.length;
  }
  for (i = 0; i < slide_window.length; i++) {
    slide_window[i].style.display = "none";
  }
  for (i = 0; i < indicator.length; i++) {
    indicator[i].className = indicator[i].className.replace(" active", "");
  }
  slide_window[slideIndex - 1].style.display = "block";
  indicator[slideIndex - 1].className += " active";
}

for (var i = 0; i < len; i++) {

  lifeimg[i].addEventListener('click', function() {
    document.getElementById('life_Img').src = this.src
  })
}

slideLeft.addEventListener('click', function() {
  document.getElementById('lifeimg-gallery').scrollLeft -= 150
})

slideRight.addEventListener('click', function() {
  document.getElementById('lifeimg-gallery').scrollLeft += 150
})

function scroll() {
  if (window.pageYOffset >= 550) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
