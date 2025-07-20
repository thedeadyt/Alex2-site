import React from 'react';
import { createRoot } from 'react-dom/client';
import { ResponsiveFooter } from './components/ResponsiveFooter';

document.addEventListener('DOMContentLoaded', () => {
  const mountNode = document.getElementById('react-footer');
  if (mountNode) {
    const root = createRoot(mountNode);
    root.render(<ResponsiveFooter />);
  }
});
