const input = document.querySelector('input');
input.addEventListener("input", () => localStorage.setItem("save", input.value.toString()))
document.querySelector(".wrapper").addEventListener("click", () => input.value = localStorage.getItem("save"))