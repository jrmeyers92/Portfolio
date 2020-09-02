// Makes H2 change HTML per the array

let h2Span = document.querySelector(".chaging-h2");
const arr = ["Web Developer", "Life-Long Learner", "Fun Haver", "Dog Lover"];
let i = 0;

let changeH2 = setInterval(() => {
  if (i === arr.length) {
    i = 0;
  }

  h2Span.innerHTML = arr[i];
  i++;
}, 2000);

// toggler menu

const navList = document.querySelector(".nav__list");
const checkbox = document.querySelector(".toggler__checkbox");
document.addEventListener("click", (e) => {
  if (e.target.classList == "toggler__checkbox") {
    if (checkbox.checked) {
      navList.classList.add("translate");
    } else if (checkbox.checked == false) {
      navList.classList.remove("translate");
    }
  } else {
    navList.classList.remove("translate");
    checkbox.checked = false;
  }
});
