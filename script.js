let currentSlide = 0;

// next function
function next() {
  console.log("next");
  //   increment slide counter by one
  currentSlide++;
  //   create a reference to existing slides
  let slides = document.getElementsByClassName("slide");
  //   check currentSlide variable
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  //   hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   display current slide
  slides[currentSlide].style.display = "block";
  updateCounter();
}

// previous function
function previous() {
  console.log("previous");
  //   reduce slide counter by one
  currentSlide--;
  //   create a reference to existing slides
  let slides = document.getElementsByClassName("slide");
  //   check currentSlide variable
  if (currentSlide <= 0) {
    currentSlide = slides.length - 1;
  }
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   display current slide
  slides[currentSlide].style.display = "block";
  updateCounter();
}

function updateCounter() {
  let slides = document.getElementsByClassName("slide");
  // create a refrence to the counter
  let counter = document.getElementsByClassName("counter");
  //   update teh content of the counter
  counter[0].innerHTML = currentSlide + 1 + "/" + slides.length;
}

// setSlide function
function setSlide(slide) {
  //   reduce slide counter by one
  currentSlide = slide;
  //   create a reference to existing slides
  let slides = document.getElementsByClassName("slide");
  //   check currentSlide variable
  if (currentSlide <= 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //   display current slide
  slides[currentSlide].style.display = "block";
  updateCounter();
}

//challenge — program non-hard-coded counteres
//challenge - fading/sliding effects
