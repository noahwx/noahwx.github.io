function toggleNav() {
    var element = document.getElementById("menu").addEventListener("click");
    if (element.style.visibility == "visible") {
        element.style.visibility = "hidden";
    } else {
        element.style.visibility = "visible";
    }
}