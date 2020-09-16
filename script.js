const smallCircle = document.getElementById("small-circle");
const bigCircle = document.getElementById("big-circle");
const benjamin = document.querySelector(".benjamin");
const wrapper = document.querySelector(".wrapper")

wrapper.addEventListener("onClick", e => {
  // let x = (e.clientX - (window.innerWidth/2));
  bigCircle.style.backgroundColor = "red";
  bigCircle.style.transform = `translate3D(50px, 0, 0)`;
  smallCircle.style.transform = `translate3D(5px, 0, 0)`;
  benjamin.style.transform = `translate3D(10px, 0, 0)`;

})