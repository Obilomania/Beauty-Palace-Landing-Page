let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  navigation.classList.toggle("nav-open");
});

// toggle.addEventListener("click", () => {
//   navigation.classList.toggle("toggle4");
// });

let a = { y: 10 };
a.x = a;
console.log(JSON.stringify(a));
