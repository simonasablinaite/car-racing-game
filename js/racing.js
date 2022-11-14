// issitraukiamos masinos is html'o:
const auto1 = document.getElementById("car-1");
const auto2 = document.getElementById("car-2");

// nusistatomas judejimo greitis
let moveBy = 10;
let auto1Position = 0;
let auto2Position = 0;

const victory = Math.ceil((window.innerWidth - 310) / moveBy);
console.log(window.innerWidth);
console.log(victory);

function event(e) {
  switch (e.key) {
    case "w":
      auto1Position += moveBy;
      const count1 = auto1Position / moveBy;
      if (count1 === victory) {
        console.log("Laimejo pirmas automobilis");
        location.reload();
      }
      auto1.style.right = auto1Position + "px";
      break;
    case "o":
      auto2Position += moveBy;
      const count2 = auto2Position / moveBy;
      if (count2 === victory) {
        console.log("Laimejo antras automobilis");
        location.reload();
      }
      auto2.style.right = auto2Position + "px";
      break;
  }
}

window.addEventListener("keyup", event);
