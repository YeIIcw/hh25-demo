console.log('[script.js] Script loaded at:', new Date().toISOString());

function toggleMenu() {
  console.log('[script.js] toggleMenu() called at:', new Date().toISOString());
  
  // Set variable to menu links
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Open menu and hamburger menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}