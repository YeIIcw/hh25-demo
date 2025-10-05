function toggleMenu() {
  try {
    console.log('toggleMenu() called');
    
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
    
    const isOpen = menu.classList.contains("open");
    console.log('Menu toggled. Current state:', isOpen ? 'open' : 'closed');
  } catch (error) {
    console.error('Error in toggleMenu():', error);
  }
}
