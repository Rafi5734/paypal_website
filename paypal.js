const dropDowns = document.querySelectorAll(".dropdown-hover");
dropDowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
        dropdown.lastElementChild.style.cssText =
            "opacity: 1; visibility: visible";
    });
    dropdown.addEventListener("mouseout", () => {
        dropdown.lastElementChild.style.cssText =
            "opacity: 0; visibility: hidden";
    });
});
