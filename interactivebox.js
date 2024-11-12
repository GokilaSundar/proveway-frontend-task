const radiobutton = document.querySelectorAll('input[type = "radio"]');
radiobutton.forEach((radio, index) => {
  const radioboxes = document.querySelectorAll(".radioboxContainer");
  const discountPrices = document.querySelectorAll(".discountPrice");
  const totals = document.querySelector(".total");

  radio.addEventListener("change", () => {
    if (radio.checked && index === 1) {
      radioboxes[1].style.border = "2px solid #ff6b82";
      radioboxes[1].style.backgroundColor = "#fff9fa";
    }
    if (radio.checked) {
      const selectedPrice =
        discountPrices[index].textContent.match(/[\d.]+/)[0];
      totals.innerHTML = `Total: $${selectedPrice} USD`;
    }
  });
});
