let h2Span = document.querySelector(".chaging-h2");
const arr = ["Web Developer", "Life-Long Learner", "Fun Haver"];
let i = 0;

let changeH2 = setInterval(() => {
  if (i === arr.length) {
    i = 0;
  }

  h2Span.innerHTML = arr[i];
  i++;
}, 2000);
