// script.js
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.querySelector("#currentYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  