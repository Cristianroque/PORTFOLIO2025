const headerLinks = document.querySelector("#headerLinks");
const options = document.querySelector("#options");
const xHeader = document.querySelector("#xHeader")

headerLinks.style.display = "none"

options.addEventListener("click", () => {
    headerLinks.style.display = "block";
    headerLinks.style.position = "fixed";
    headerLinks.style.opacity = "100%";
    headerLinks.style.right = "0%";
})

xHeader.addEventListener("click", () => {
    headerLinks.style.display = "none";
    headerLinks.style.opacity = "100%";
    headerLinks.style.right = "0%";
})
