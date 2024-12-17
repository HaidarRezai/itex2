function dark() {
    localStorage.setItem("dark", "dark");
    document.getElementById("body").classList.add(localStorage.getItem("dark"));

}
function removeDark() {
    localStorage.setItem('dark', '');
    document.getElementById("body").classList.add(localStorage.getItem("dark"));

}
document.getElementById("body").classList.add(localStorage.getItem("dark"));