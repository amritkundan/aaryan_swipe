document.addEventListener("DOMContentLoaded", function() {
    var imageIndex = 0;
    var images = ["firstImage.png", "secondImage.png", "thirdImage.png"]; // Add more images

    function changeImage() {
        imageIndex = (imageIndex + 1) % images.length;
        document.getElementById("mainImage").src = images[imageIndex];
    }

    var imageContainer = document.getElementById("imageContainer");
    imageContainer.addEventListener("touchstart", changeImage);
});
