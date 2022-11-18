const myModal = document.getElementById("myModal");
const container = document.getElementById("modalContainer");
const btn = document.getElementById("myButton");
const closeButton = document.getElementById("closeButton");

btn.onclick = function () {
  container.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == myModal || event.target == closeButton) {
    container.style.display = "none";
  }
};
