const menu = document.getElementById("main-menu")

const hamMenu = () => {
    console.log("Hello_world");

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}