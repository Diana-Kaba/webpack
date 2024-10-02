import "./sass/style.scss";

const foo = require('./js/foo.js');

document.body.innerHTML += "<h2>Hello, Webpack!</h2>";

const img1 = document.createElement("img");
const img2 = document.createElement("img");
img1.src = "./imgs/365-536x354.jpg";
img2.src = "./imgs/360-536x354.jpg";

document.body.append(img1);
document.body.append(img2);
