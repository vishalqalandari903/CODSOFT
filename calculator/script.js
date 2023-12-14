let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    if (display.value == "NaN" || display.value == "Infinity") {
      string = "";
    }

    if (button.innerHTML == "=") {
      try {
        string = eval(string);
      } catch (e) {
        console.log("wrong");
      }
    } else if (button.innerHTML == "AC") {
      string = "";
    } else if (button.innerHTML == "x") {
      string += "*";
    } else if (button.innerHTML == "÷") {
      string += "/";
    } else {
      string = string + button.innerHTML;
    }
    display.value = string;
  });
});
