function toggleNav() {
    var element = document.getElementById("menu");
    if (element.style.visibility == "visible") {
        element.style.visibility = "hidden";
    } else {
        element.style.visibility = "visible";
    }
}

function togglePost() {
    var element = document.getElementById("m-post");
    var postBtn = document.getElementById("mobile-post-btn");
    var postBtnC = document.getElementById("mobile-post-btn-c");

    if (element.style.visibility == "visible") {
        element.style.visibility = "hidden";
    } else {
        element.style.visibility = "visible";
    }

    if (postBtn.style.visibility == "hidden") {
        postBtn.style.visibility = "visible";
    } else {
        postBtn.style.visibility = "hidden";
    }

    if (postBtnC.style.visibility == "visible") {
        postBtnC.style.visibility = "hidden";
    } else {
        postBtnC.style.visibility = "visible";
    }
}