const cardA = document.querySelector(".card-a");
const cardB = document.querySelector(".card-b");
const rateOutput = document.querySelector(".rate-output");
const btnSubmit = document.querySelector(".submit-btn");
const buttons = document.querySelectorAll("input[type='button']");

let selectedButtonValue;

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    selectedButtonValue = btn.value;
  });
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  cardA.classList.toggle("hide-card-a");
  cardB.classList.toggle("show-card-b");
  rateOutput.textContent = `You selected ${selectedButtonValue} out of 5!`;
});
