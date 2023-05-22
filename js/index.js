// const year = new Date().getFullYear();
// document.getElementById("year").innerHTML = year;



let slidePosition = 1;
 SlideShow(slidePosition);

 // forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
 }

//  images controls
   function currentSlide(n) {
    SlideShow(slidePosition = n);
  }

function SlideShow(n) {
  let i;
  const slides = document.getElementsByClassName("Containers");
  const circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 







const countDowndate = new Date("May 5, 2023 23:00 :00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDowndate - now;
    const days = Math.floor(distance / (1000 *60 *60 *24));
    const hours = Math.floor((distance % (1000 *60 *60 *24)) / (1000 *60 *60));
    const minutes = Math.floor((distance % (1000 *60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 *60)) / 1000);
    document.getElementById("timerCounterDown").innerHTML = hours +"" + minutes + "" + seconds + "s";
    if (distance < 0){
        clearInterval(x);
        document.getElementById("timerCounterDown").innerHTML = "EXPIRED";
    }
   }, 1000);


const deleteIcon = document.querySelector(".deleting-header-container");
deleteIcon.addEventListener('click', () => {
    deleteIcon.remove()
});
