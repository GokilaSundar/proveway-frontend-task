const radiobutton = document.querySelectorAll('input[type = "radio"]');
radiobutton.forEach((radio, index) => {
  const radioboxes = document.querySelectorAll(".radioboxContainer");
  const discountPrices = document.querySelectorAll(".discountPrice");
  const totals = document.querySelector(".total");

  radio.addEventListener("change", () => {
    radioboxes.forEach((radiobox) => {
      radiobox.style.border = "2px solid #e3e3e3";
      radiobox.style.backgroundColor = "";
    });
    if (radio.checked && index === 1) {
      radioboxes[1].style.border = "2px solid #ff6b82";
      radioboxes[1].style.backgroundColor = "#fff9fa";
    }
    if (radio.checked) {
      const selectedPrice =
        discountPrices[index].textContent.match(/[\d.]+/)[0];
      totals.innerHTML = `Total: $${selectedPrice} USD`;
      console.log(
        totals,
        radio,
        "radio",

        index,
        radio.checked
      );
    }
  });
});
