var images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg"
];
var currentIndx = 0;
var intervalId = null;

var photo = document.getElementById("photo");

function showImage(indx) {
  photo.src = images[indx];
}

function nextImage() {
  if (currentIndx < images.length - 1) {
    currentIndx++;
    showImage(currentIndx);
  }
}

function prevImage() {
  if (currentIndx > 0) {
    currentIndx--;
    showImage(currentIndx);
  }
}

function startSlideshow() {
  if (intervalId) return; // Prevent multiple intervals

  intervalId = setInterval(() => {
    currentIndx++;
    if (currentIndx >= images.length) {
      currentIndx = 0; // Loop back to the beginning
    }
    showImage(currentIndx);
  }, 1000); 
}

function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
}

