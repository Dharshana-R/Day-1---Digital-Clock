
window.addEventListener("DOMContentLoaded", showTime());

function showTime() {

  let date = new Date();

  
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }


  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  
  const time = `${h}:${m}:<small>${s} ${session}</small>`;

  document.getElementById("displayClock").innerHTML = time;
  setTimeout(showTime, 1000);

 
  let bg;
  const userName = "There!";
  const user = document.getElementById("User");

  if (h >= 5 && h <= 8 && session === "AM") {
    bg = `url(https://tinyurl.com/nmdee7rh)`;
    user.innerHTML = `Good Morning, ${userName}`;
  } else if (h > 8 && h < 12 && session === "AM") {
    bg = `url(https://tinyurl.com/2p8fbwc4)`;
    user.innerHTML = `Good Day, ${userName}`;
  } else if (h >= 1 && h <= 4 && session === "PM") {
    bg = `url(https://tinyurl.com/4a5jy7mt)`;
    user.innerHTML = `Good Afternoon, ${userName}`;
  } else if (h <= 4 && h>=6 session === "PM") {
    bg = `url(https://tinyurl.com/yr6m3xrx)`;
    user.innerHTML = `Good Evening, ${userName}`;
  } else {
    bg = `url(https://tinyurl.com/2p966apa)`;
    user.innerHTML = `Good Night, ${userName}`;
  }

  const body = document.querySelector("body");
  body.style.background = `${bg} center/cover`;
}


