// issitraukiamos masinos is html'o:
const auto1 = document.getElementById("car-1");
const auto2 = document.getElementById("var-2");

// nusistatomas judejimo greitis
let moveBy = 10;

// nusistatomi klaviaturos klavisai:
window.addEventListener("load", () => {
  auto1.style.position = "absolute";
  auto1.style.left = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      auto1.style.left = parseInt(auto1.style.left) - moveBy + "px";
  }
});
