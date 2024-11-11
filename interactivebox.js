const radiobutton = document.querySelectorAll('input[type = "radio"]');
radiobutton.forEach((radio) => {
  const radioboxes = document.querySelectorAll(".radioboxContainer");

  radio.addEventListener("change", () => {
    radioboxes.forEach((container) => {
      container.style.border = "2px solid rgb(213, 209, 209)";
      container.style.backgroundColor = "";
    });
    if (radio.checked) {
      const selectedbox = radio.closest(".radioboxContainer");
      selectedbox.style.border = "3px solid #ff6b82";
      selectedbox.style.backgroundColor = "#f5f0f1";
    }
  });
});
