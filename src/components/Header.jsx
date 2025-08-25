import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='Header'>
        <h1>Sylas</h1>
        <nav>
            <Link to="/" className='Header-link'>Início</Link>
            <Link to="/sobre" className='Header-link'>Sobre</Link>
            <Link to="/docs" className='Header-link'>Documentação</Link>
        </nav>
    </header>
  );
}

export default Header;
