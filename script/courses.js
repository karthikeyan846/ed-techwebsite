const dropdownToggle = document.querySelector('.dropdown-toggle');

// Detect if the device is small or medium
function isSmallOrMediumDevice() {
  return window.innerWidth <= 1199;
}

// Handle click event
dropdownToggle.addEventListener('click', function(event) {
  if (isSmallOrMediumDevice()) {
    event.preventDefault();
    // Redirect to the course page directly
    window.location.href = 'page1.html'; // Update with the appropriate URL
  }
});