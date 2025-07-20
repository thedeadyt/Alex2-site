import React from 'react';
import { createRoot } from 'react-dom/client';
import { CompleteHeader } from './components/CompleteHeader';

document.addEventListener('DOMContentLoaded', () => {
  const mountNode = document.getElementById('react-navbar');
  if (mountNode) {
    const root = createRoot(mountNode);
    root.render(<CompleteHeader />);
  }

  // Menu mobile toggle
  const toggle = document.getElementById('burger-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
