document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#imageContainer img");
    let currentIndex = 0;
  
    function rotateImages() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    }
  
    rotateImages(); // Initial rotation
  
    setInterval(rotateImages, 2000); // Rotate every 2 seconds (adjust as needed)
  });

//Current date:
var todayDate = Date();
document.getElementById('today').innerHTML = 'Current time: ' + todayDate
  
