import React, { useEffect, useRef, useState } from 'react';

const links = [
  { name: 'Accueil', href: '/' },
  { name: 'Projets', href: '/projets' },
  { name: 'Services', href: '/services' },
  { name: 'À propos', href: '/apropos' },
  { name: 'Contact', href: '/contact' },
];

export function CompleteHeader() {
  const refs = useRef([]);
  const initialIndex = links.findIndex(link => link.href === window.location.pathname);
  const [activeIndex, setActiveIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

  function updateHighlight(index) {
    const el = refs.current[index];
    if (el) {
      setHighlight({
        left: el.offsetLeft - 12,
        width: el.offsetWidth + 24,
      });
    }
  }

  useEffect(() => {
    // Différer le calcul au prochain rafraîchissement écran
    const rafId = window.requestAnimationFrame(() => updateHighlight(activeIndex));
    return () => window.cancelAnimationFrame(rafId);
  }, [activeIndex]);

  useEffect(() => {
    // Met à jour activeIndex si l’URL change sans reload (ex: back/forward navigateur)
    function onPopState() {
      const idx = links.findIndex(link => link.href === window.location.pathname);
      if (idx !== -1) setActiveIndex(idx);
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div
      className="relative space-x-6 font-base"
      onMouseLeave={() => updateHighlight(activeIndex)}
    >
      <div
        className="absolute z-0 transition-all duration-500 ease-out rounded"
        style={{
          width: `${highlight.width}px`,
          left: `${highlight.left}px`,
          backgroundColor: 'black',
          top: '50%',
          transform: 'translateY(-50%)',
          height: '2em',
          borderRadius: '0.5rem',
          pointerEvents: 'none',
        }}
      />
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          ref={(el) => (refs.current[i] = el)}
          onMouseEnter={() => setActiveIndex(i)}
          className="relative px-1 font-medium transition-colors duration-300"
          style={{ color: activeIndex === i ? 'white' : 'black' }}
        >
          <span className="relative z-10">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
