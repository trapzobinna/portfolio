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



document.addEventListener('DOMContentLoaded', (event) => {
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
        // Check if sidebar is visible by examining its 'left' property
        if (sidebarContent.style.left === '0px') {
            sidebarContent.style.left = '-200px'; // Hide by moving it off-screen
        } else {
            sidebarContent.style.left = '0'; // Show by moving into view
        }
    });
    
    // Close the sidebar if clicking anywhere outside the sidebar
    document.addEventListener("click", (event) => {
        const isClickInside = sidebarContent.contains(event.target) || menuButton.contains(event.target);

        if (!isClickInside) {
            sidebarContent.style.display = 'none'; // Hide the sidebar
        }
    });

    // Confirm skipping the loading screen
    const skipLoading = confirm("You are visiting my page, please confirm");
    if (!skipLoading) {
        window.addEventListener("load", () => {
            hideLoadingScreen();
        });
    } else {
        loadScreen.style.transition = "none";
        hideLoadingScreen();
    }

    // Function to hide the loading screen
    function hideLoadingScreen() {
        loader.style.display = "none";
        loaderText.style.display = "none";
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

    // Call adjustDropdownPosition to check if adjustment is needed on page load
    // This might need to be inside a specific event where you know the dropdown is visible
    // or after a certain action is performed.
});

function change_mode() {
    document.body.classList.toggle("dark");
    content.classList.toggle("dark2");

    // Correctly toggle the innerHTML for the theme icon
    if (themeIcon.innerHTML === "light_mode") {
        themeIcon.innerHTML = "dark_mode";
    } else {
        themeIcon.innerHTML = "light_mode";
    }
}

// You might need to move the darkModeToggle click event listener inside the DOMContentLoaded if it does not work as expected outside.
darkModeToggle.addEventListener("click", change_mode);



