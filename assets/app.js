import './styles/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1 className="text-3xl font-bold text-blue-600 underline">Hello from React + Tailwind!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
