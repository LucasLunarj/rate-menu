let rate = 0;
const button1 = document.querySelectorAll(".buttons")[0];
const button2 = document.querySelectorAll(".buttons")[1];
const button3 = document.querySelectorAll(".buttons")[2];
const button4 = document.querySelectorAll(".buttons")[3];
const button5 = document.querySelectorAll(".buttons")[4];
function btn1() {
  rate = 1;
  button1.style.backgroundColor = "hsl(25, 97%, 53%)";
  if (rate >= 1) {
    button2.style.backgroundColor = "#272e38";
    button3.style.backgroundColor = "#272e38";
    button4.style.backgroundColor = "#272e38";
    button5.style.backgroundColor = "#272e38";
  }
}
function btn2() {
  rate = 2;
  button2.style.backgroundColor = "hsl(25, 97%, 53%)";
  if (rate >= 2) {
    button1.style.backgroundColor = "#272e38";
    button3.style.backgroundColor = "#272e38";
    button4.style.backgroundColor = "#272e38";
    button5.style.backgroundColor = "#272e38";
  }
}
function btn3() {
  rate = 3;
  button3.style.backgroundColor = "hsl(25, 97%, 53%)";
  if (rate >= 3) {
    button1.style.backgroundColor = "#272e38";
    button2.style.backgroundColor = "#272e38";
    button4.style.backgroundColor = "#272e38";
    button5.style.backgroundColor = "#272e38";
  }
}
function btn4() {
  rate = 4;
  button4.style.backgroundColor = "hsl(25, 97%, 53%)";
  if (rate >= 4) {
    button1.style.backgroundColor = "#272e38";
    button2.style.backgroundColor = "#272e38";
    button3.style.backgroundColor = "#272e38";
    button5.style.backgroundColor = "#272e38";
  }
}
function btn5() {
  rate = 5;
  button5.style.backgroundColor = "hsl(25, 97%, 53%)";
  if (rate <= 5) {
    button1.style.backgroundColor = "#272e38";
    button2.style.backgroundColor = "#272e38";
    button3.style.backgroundColor = "#272e38";
    button4.style.backgroundColor = "#272e38";
  }
}
function SubmitEvent() {
  if (rate > 0) {
    document.querySelector(".content").innerHTML = `<div class="ty-screen">
  <img
    class="ty-image"
    src="images/illustration-thank-you.svg"
    alt="Thank you image"
  />
  <p class="counter">You selected ${rate} out of 5</p>
  <div>
    <h2>Thank you!</h2>
    <p>
      We appreciate you taking the time to give a rating. if you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>
</div>`;
  }
}
