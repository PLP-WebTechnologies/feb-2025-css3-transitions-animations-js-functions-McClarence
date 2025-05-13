// Get references to the elements
const button = document.getElementById('toggleButton');
const image = document.getElementById('image');

// Function to trigger the animation
function toggleAnimation() {
    image.classList.toggle('animate');

    // Store the animation state in localStorage
    const isAnimated = image.classList.contains('animate');
    localStorage.setItem('imageAnimated', isAnimated);
}

// Load user preferences on page load
window.onload = function () {
    const isAnimated = localStorage.getItem('imageAnimated') === 'true';
    if (isAnimated) {
        image.classList.add('animate');
    }
};

// Add event listener to the button
button.addEventListener('click', toggleAnimation);
