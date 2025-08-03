const list = document.querySelector(".choice");
const input = document.querySelector(".select");
const cities = document.querySelectorAll(".choice span");
const inputField = document.querySelector(".icon .label");
const searchField1 = document.querySelector("#search1");
// const searchField2 = document.querySelector("#search2");
// const searchField3 = document.querySelector("#search3");
const navBar = document.querySelector(".navbar");

cities.forEach((city) => {
  city.addEventListener("click", () => {
    const cityName = city.textContent;
    inputField.innerHTML = `${cityName}`;
  });
});
input.onclick = () => {
  if (list.style.visibility === "hidden") {
    list.style.visibility = "visible";
    list.style.opacity = "1";
  } else {
    list.style.visibility = "hidden";
    list.style.opacity = "0";
  }
};

searchField1.addEventListener("input", (e) => {
  let val = e.target.value.toLowerCase();
  cities.forEach((city) => {
    const cityName = city.textContent.toLowerCase();
    if (cityName.includes(val)) {
      city.style.display = "block";
    } else {
      city.style.display = "none";
    }
  });
});



window.onscroll = () => {
  let topDistance = document.documentElement;
  if (topDistance.scrollTop >= 55) {
    navBar.style.backgroundColor = "white";
  } else {
    navBar.style.backgroundColor = "";
  }
};
