const arr = [
  "./img/11268502654_f28f05966c_m (1).jpg",
  "/img/45336904_1aef569b30_n (1).jpg",
  "/img/5384592886_80a512e2c9.jpg",
];
function randomImg() {
  let img = document.createElement("img");

  let randomNum = Math.floor(Math.random() * arr.length);

  img.setAttribute("src", arr[randomNum]);
  img.setAttribute("class", "web-img");
  return document.querySelector(".container").append(img);
}
window.onload = randomImg();
