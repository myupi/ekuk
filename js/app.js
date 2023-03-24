let first = document.querySelector(".first");
let second = document.querySelector(".second");
let ekub = document.querySelector(".ekub");
let ekuk = document.querySelector(".ekuk");
let btn = document.querySelector(".ishlash");


function Ekuk(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else if (a === b) {
    return a;
  } else if (a > b) {
    return Ekuk(a - b, b);
  } else {
    return Ekuk(a, b - a);
  }
}
function Ekub(a, b) {
  return Math.abs(a * b) / Ekuk(a, b);
}
function ekukEkubFunc(a, b) {
  ekub.innerHTML = Ekub(a, b);
  ekuk.innerHTML = Ekuk(a, b);
}
