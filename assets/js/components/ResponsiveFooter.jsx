import React, { useState, useEffect } from 'react';

export function ResponsiveFooter() {
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    function handleResize() {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      if (desktop) {
        setOpen(true); // Ouvert en desktop
      } else {
        setOpen(false); // Fermé par défaut sur mobile
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize(); // Vérification initiale
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Détermine la classe min-h selon la taille et l'état open
  const minHeightClass = isDesktop
    ? 'min-h-[300px]'
    : open
    ? 'min-h-[200px]' // si ouvert mobile, taille moyenne (ou auto)
    : 'min-h-[50px]'; // si fermé mobile, très petite hauteur

  return (
    <footer className={`px-6 py-4 text-white bg-black font-base flex flex-col justify-between ${minHeightClass}`}>
      {(open || isDesktop) && (
        <div className="grid flex-grow max-w-6xl grid-cols-1 gap-10 mx-auto mt-4 text-white transition-all duration-300 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xl text-center md:text-left font-base">Navigation</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="/" className="hover:underline">Accueil</a></li>
              <li><a href="/projets" className="hover:underline">Projets réalisés</a></li>
              <li><a href="/services" className="hover:underline">Nos services</a></li>
              <li><a href="/apropos" className="hover:underline">À propos</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="mb-4 text-xl text-center md:text-left font-base">Mentions légales</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="/mentions-legales" className="hover:underline">Mentions légales</a></li>
              <li><a href="/confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
            <div>
            <h3 className="mb-4 text-xl text-center md:text-left font-base">Suivez-nous</h3>
            <div className="flex flex-col items-center space-y-3 md:items-start">
                <a
                href="https://www.linkedin.com/in/alex-alex-597150372"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:underline"
                >
                {/* LinkedIn SVG icon */}
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V8H0v16zM7.5 8h4.78v2.16h.07c.66-1.26 2.28-2.59 4.7-2.59 5.03 0 5.95 3.3 5.95 7.59V24h-5v-6.67c0-1.59-.03-3.64-2.22-3.64-2.23 0-2.57 1.73-2.57 3.51V24h-5V8z" />
                </svg>
                <span>@alex2-dev</span>
                </a>
                <a
                href="https://www.instagram.com/alex2.dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:underline"
                >
                {/* SVG Instagram ici */}
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.323.975.975 1.26 2.242 1.323 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.348 2.633-1.323 3.608-.975.975-2.242 1.26-3.608 1.323-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.26-2.242-1.323-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.348-2.633 1.323-3.608C4.568 2.618 5.835 2.333 7.2 2.27 8.466 2.212 8.85 2.2 12 2.2zm0-2.2C8.7 0 8.3.012 7.05.07 5.667.13 4.3.415 3.125 1.59 1.95 2.765 1.665 4.133 1.605 5.515.547 6.766.535 7.167.535 12s.012 5.233.07 6.485c.062 1.382.347 2.75 1.52 3.925 1.175 1.175 2.542 1.46 3.925 1.52C8.3 23.988 8.7 24 12 24s3.7-.012 4.95-.07c1.383-.062 2.75-.347 3.925-1.52 1.175-1.175 1.46-2.542 1.52-3.925.058-1.252.07-1.652.07-6.485s-.012-5.233-.07-6.485c-.062-1.382-.347-2.75-1.52-3.925C19.7.415 18.333.13 16.95.07 15.7.012 15.3 0 12 0zM12 5.838A6.163 6.163 0 1 0 18.162 12 6.163 6.163 0 0 0 12 5.838zm0 10.2A4.038 4.038 0 1 1 16.038 12 4.038 4.038 0 0 1 12 16.038zM18.406 4.594a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                </svg>
                <span>@alex2-dev</span>
                </a>
                <a
                href="https://github.com/alex2-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:underline"
                >
                {/* SVG GitHub ici */}
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405 11.5 11.5 0 0 1 3 .405c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>@alex2-dev</span>
                </a>
            </div>
            </div>

        </div>
      )}

      <div
        className="flex items-center justify-center mt-4 cursor-pointer select-none md:mt-10"
        onClick={() => !isDesktop && setOpen((o) => !o)}
        aria-label="Toggle footer content"
      >
        <div className="text-sm text-center text-gray-400">
          &copy; 2025 <span className="font-semibold">&lt;Alex²/&gt;</span>. Tous droits réservés.
        </div>
        {!isDesktop && (
        <svg
        className={`w-5 h-5 ml-2 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        )}
      </div>
    </footer>
  );
}
