// invalid email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const input = document.querySelector(".input");
const submit = document.querySelector(".input-btn");
const error = document.querySelector(".error");

submit.addEventListener("click", function() {
    const err = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!err.test(input.value.toLowerCase())) {
        error.style.display = "block";
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "green";
        error.style.display = "none";
    }
    
    input.value = "";
});