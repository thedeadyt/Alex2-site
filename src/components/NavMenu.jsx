import React, { useState, useEffect } from 'react';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const navDesktop = document.getElementById('nav-desktop');
    if (navDesktop) {
      setCurrentPage(navDesktop.getAttribute('data-current-page'));
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const navMobile = document.getElementById('nav-mobile');
    if (navMobile) {
      navMobile.classList.toggle('hidden');
    }
  };

  useEffect(() => {
    // Gérer la classe active sur les liens desktop
    const navDesktop = document.getElementById('nav-desktop');
    if (navDesktop) {
      const links = navDesktop.querySelectorAll('a[data-page]');
      links.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
          link.classList.add('text-white', 'bg-black', 'rounded'); // exemple classe active
        } else {
          link.classList.remove('text-white', 'bg-black', 'rounded');
        }
      });
    }
  }, [currentPage]);

  return (
    <button id="menu-toggle" onClick={toggleMenu} className="text-gray-700 focus:outline-none">
      {menuOpen ? '✕' : '☰'}
      <span className="sr-only">Toggle Menu</span>
    </button>
  );
};

export default NavMenu;
