var buttons = document.querySelectorAll(".btn");
var submit = document.getElementById("btn-submit");
var card1 = document.querySelector(".container");
var card2 = document.querySelector(".thankyou-container");
var rate = document.getElementById("rate");
var rateRequired = document.querySelector(".rate-required");

submit.addEventListener("click", changePage);

function changePage() {
    if (rate.innerHTML == ""){
        rateRequired.classList.remove("hidden");
    } else {
        card1.style.display = "none";
        card2.classList.remove("hidden");
    }}
    


buttons.forEach(function(x){
    x.addEventListener("click", function(){
        rate.innerHTML = x.innerHTML;
    });
});