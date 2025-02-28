const headerLinks = document.querySelector("#headerLinks");
const options = document.querySelector("#options");
const xHeader = document.querySelector("#xHeader")

options.addEventListener("click", () => {
    headerLinks.style.animation = "aparecer 1.2s forwards"
    headerLinks.style.position = "fixed"
})

xHeader.addEventListener("click", () => {
    headerLinks.style.animation = "none"
})
