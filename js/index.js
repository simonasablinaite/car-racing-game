// issitraukiamos masinos is html'o:
const auto1 = document.getElementById("car-1");
const auto2 = document.getElementById("car-2");

// nusistatomas judejimo greitis
let moveBy = 10;

// pirmos auto valdymas:
window.addEventListener("load", () => {
  auto1.style.position = "absolute";
  auto1.style.left = 0;
});

window.addEventListener("load", () => {
  auto2.style.position = "absolute";
  auto2.style.left = 0;
});

// function moveLeft() {
//   let leftNumber = auto2.style.left.replace("px", "");
//   let left = parseInt(leftNumber, 87);

//   if (left > 0) {
//     auto2.style.left = `${left - 1}px`;
//   }
// }
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      auto1.style.left = parseInt(auto1.style.left) - moveBy + "px";
      break;
    case 87:
      auto2.style.left = parseInt(auto2.style.left) - moveBy + "px";
      break;
  }
});
