function toggleAboutSection() {
    var button = document.getElementById('read-more-btn')
    if (button.innerHTML == "Read More") {
        button.innerHTML = "Read Less";
        button.parentElement.classList.add("showContent");
    }
    else {
        button.innerHTML = "Read More";
        button.parentElement.classList.remove("showContent")
    }
}
