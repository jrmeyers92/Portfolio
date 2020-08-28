const h2Text = document.querySelector(".chaging-h2").innerHTML;
console.log(h2Text);

setInterval(() => {
  h2Text = "a friend";
}, 7000);
