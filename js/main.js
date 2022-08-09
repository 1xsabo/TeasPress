let menuIcon= document.querySelector(".main-categories-icon")
let menuItem= document.querySelector(".main-page-var-box")

menuIcon.onclick = () => {
   menuItem.classList.toggle("active")
}