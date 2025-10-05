// Log script execution
console.log('script.js loaded and ready');

function toggleMenu() {
  console.log('toggleMenu() called');
  
  // Set variable to menu links
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Open menu and hamburger menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}