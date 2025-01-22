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

    // Automatically skip loading screen without confirmation
    window.addEventListener("load", () => {
        hideLoadingScreen();
    });

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

const bgImages = document.querySelectorAll('.bg-image');

let currentIndex = 0;

function changeBackgroundImage() {
    // Remove 'show' class from all elements
    bgImages.forEach(img => img.classList.remove('show'));

    // Add 'show' class to the current element
    bgImages[currentIndex].classList.add('show');

    // Update currentIndex
    currentIndex = (currentIndex + 1) % bgImages.length;
}

// Initial display
changeBackgroundImage();

// Change the image every 5 seconds
setInterval(changeBackgroundImage, 5000);
