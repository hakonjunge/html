const menu = document.getElementById("main-menu")

const hamMenu = () => {
    console.log("Hello_world");

    if (menu.style.display == "block") {
        menu.style.display = "none";
        menu.style.gap = "15px";
        menu.style.position = "absolute";
        menu.style.left = "0";
        menu.style.padding = "1rem";

    } else {
        menu.style.display = "block";
    }
}
    