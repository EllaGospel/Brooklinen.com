

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
