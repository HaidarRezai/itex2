function dark() {
    localStorage.setItem("dark", "dark");
    document.getElementById("body").classList.add(localStorage.getItem("dark"));

}
function removeDark() {
    localStorage.setItem('dark', '');
    document.getElementById("body").classList.remove(localStorage.getItem("dark"));
}

function popupWindow() {
    document.getElementById("popup").classList.add("showWindow")
}
function popupWindow_close() {
    document.getElementById("popup").classList.remove("showWindow")
}


function navOn() {
    document.getElementById("header").classList.add("onNav")
}
function navOff() {
    document.getElementById("header").classList.remove("onNav")
}