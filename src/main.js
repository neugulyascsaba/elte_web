const contrastToggleBtn = document.getElementById("high-contrast-btn");

// Megnézi, hogy legutóbbi használatkor be lett-e állítva a kontraszt
if (localStorage.getItem("high-contrast") == "on")
{
    document.body.classList.add("high-contrast");
}

// Kapcsolgatja és menti a kontrasztot kattintáskor
contrastToggleBtn.addEventListener("click", () =>
{
    document.body.classList.toggle("high-contrast");

    if (document.body.classList.contains("high-contrast"))
    {
        localStorage.setItem("high-contrast", "on");
    }
    else
    {
        localStorage.setItem("high-contrast", "off");
    }
});
