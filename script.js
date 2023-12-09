const operators = document.querySelectorAll(".num");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const cross = document.querySelector(".cross");

let operation = "";

operators.forEach(function (e) {
  e.addEventListener("click", function () {
    operation += e.getAttribute("data");
    screen.innerHTML += e.innerHTML;
  });
});

equal.addEventListener("click", function () {
  if (screen.innerHTML !== "") {
    screen.innerHTML = eval(operation)
    operation = eval(operation)
  }
});

clear.addEventListener("click", function () {
  screen.innerHTML = "";
  operation = "";
});

cross.addEventListener("click", function () {
  screen.innerHTML = screen.innerHTML.slice(0, -5);
  operation = operation.slice(0, -1);
});
