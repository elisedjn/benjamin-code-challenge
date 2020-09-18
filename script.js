const smallCircle = document.getElementById("small-circle");
const bigCircle = document.getElementById("big-circle");
const benjamin = document.querySelector(".benjamin");
const wrapper = document.querySelector(".wrapper")

wrapper.addEventListener("mousemove", e => {
  let x = (e.clientX);
  bigCircle.style.transform = `translate3D(${x/10}px, 0, 0)`;
  smallCircle.style.transform = `translate3D(${-x/20}px, 0, 0)`;
  benjamin.style.transform = `translate3D(${-x/35}px, 0, 0)`;

})