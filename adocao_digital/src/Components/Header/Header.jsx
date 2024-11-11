import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <section className="logo-nav">
        <Link className="logo-a" to="/">
          <img className="logo" src="/Images/logotipo.png" alt="logo" />
        </Link>

        {/* Botão do menu hambúrguer para mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Menu de navegação */}
        <nav className={`navegation ${isOpen ? 'open' : ''}`}>
          <ul className="list-nav">
            <li className="list">
              <Link to="/" onClick={toggleMenu}>
                Início
              </Link>
            </li>
            <li className="list">
              <Link to="/adocao" onClick={toggleMenu}>
                Adoção
              </Link>
            </li>
            <li className="list">
              <Link to="/conheca" onClick={toggleMenu}>
                Conheça nossos Pets
              </Link>
            </li>
            <li className="list">
              <Link to="/cadastro" onClick={toggleMenu}>
                Cadastro de Adotante
              </Link>
            </li>
            <li className="list">
              <Link to="/contato" onClick={toggleMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
