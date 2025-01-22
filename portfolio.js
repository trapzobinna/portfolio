document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    const sidebarIcon = document.getElementById('menuButton');
    const sidebar = document.querySelector('.right');

    sidebarIcon.addEventListener('click', function () {
        sidebar.classList.toggle('show-sidebar');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !sidebarIcon.contains(event.target)) {
            sidebar.classList.remove('show-sidebar');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById("menuButton");
    const sidebarContent = document.getElementById("sidebarContent");
    const loadScreen = document.querySelector(".load-screen");
    const loader = document.querySelector(".loader");
    const loaderText = document.querySelector(".loader-text");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const content = document.querySelector(".content");
    const themeIcon = document.querySelector("#tg");

    menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        sidebarContent.style.left = sidebarContent.style.left === '0px' ? '-200px' : '0';
    });

    document.addEventListener("click", (event) => {
        if (!sidebarContent.contains(event.target) && !menuButton.contains(event.target)) {
            sidebarContent.style.display = 'none';
        }
    });

    // Automatically hide the loading screen on page load
    window.addEventListener("load", () => {
        hideLoadingScreen();
    });

    // Function to hide the loading screen
    function hideLoadingScreen() {
        loader.style.display = "none";
        loaderText.style.display = "none"; // Clear message completely
        loadScreen.style.opacity = "0";
        loadScreen.style.top = "-100px";

        setTimeout(() => {
            loadScreen.style.display = "none";
        }, 1000);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        content.classList.toggle("dark2");
        themeIcon.innerHTML = themeIcon.innerHTML !== "light_mode" ? "light_mode" : "dark_mode";
    });
});
