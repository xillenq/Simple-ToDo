const input = document.querySelector("#inp");
const text = document.querySelector(".text");

function Add() {
  if (input.value == "") {
    alert("unesi nesta");
    return 0;
  }

  let newEle = document.createElement("ul");

  newEle.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
  text.appendChild(newEle);
  input.value = "";
  newEle.querySelector("i").addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}
