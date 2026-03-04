const form = document.querySelector("form");
const formResetButton = form.querySelector("input[type='button']");

// Üríti az űrlapba berakott inputokat
formResetButton.addEventListener('click', () => {
    form.reset();
});
