// Debug logging utility
function debug(message) {
  const timestamp = new Date().toISOString();
  console.log(`[DEBUG ${timestamp}] ${message}`);
}

function toggleMenu() {
  debug('toggleMenu() function triggered');
  
  // Set variable to menu links
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Open menu and hamburger menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  debug('Menu toggled successfully');
}