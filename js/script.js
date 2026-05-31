const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", () => {
  alert("Thank you for visiting Skillup Labs");
});

const serviceCards = document.querySelector(".service-cards");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomLevelText = document.getElementById("zoomLevel");

let scale = 1;

zoomInBtn.addEventListener("click", () => {
  if (scale < 1.5) {
    scale += 0.1;

    serviceCards.style.transform = `scale(${scale})`;
    zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
  }
});

zoomOutBtn.addEventListener("click", () => {
  if (scale > 0.7) {
    scale -= 0.1;

    serviceCards.style.transform = `scale(${scale})`;
    zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
  }
});
