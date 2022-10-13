const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const multiclick = document.getElementById("multiclick");
const tur = document.getElementById("tur");

let cookies = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;
let multiclickPrice = 50;
let multiclickIncrease = 1;

cookie.onclick = () => {
  cookies += multiclickIncrease;
  counter.innerHTML = cookies;
};


autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoturret: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
        cookies += autoclickerIncrease;
        counter.innerHTML = cookies;
      }, 1000);
    }
    autoclickerIncrease++;
  }
};

multiclick.onclick = () => {
  if (cookies >= multiclickPrice) {
    cookies -= multiclickPrice;
    counter.innerHTML = cookies;
    multiclickPrice *= 2;
    multiclick.innerHTML = `Buy multishot: ${multiclickPrice}` ;
    multiclickIncrease++;
  }
};
