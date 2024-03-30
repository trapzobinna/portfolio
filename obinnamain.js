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
