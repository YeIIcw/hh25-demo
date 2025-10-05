function toggleMenu() {
  console.log('toggleMenu() called');
  
  // Set variable to menu links
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  console.log('Menu element found:', menu !== null);
  console.log('Icon element found:', icon !== null);

  // Open menu and hamburger menu
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  console.log('Menu toggled. Current state:', menu.classList.contains('open') ? 'open' : 'closed');
}