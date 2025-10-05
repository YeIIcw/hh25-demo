function toggleMenu() {
  console.log('toggleMenu() called');
  
  try {
    // Set variable to menu links
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu || !icon) {
      console.error('Menu elements not found:', { menu: !!menu, icon: !!icon });
      return;
    }

    // Open menu and hamburger menu
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
    console.log('Menu toggled:', { menuOpen: menu.classList.contains('open'), iconOpen: icon.classList.contains('open') });
  } catch (error) {
    console.error('Error in toggleMenu():', error);
  }
}
