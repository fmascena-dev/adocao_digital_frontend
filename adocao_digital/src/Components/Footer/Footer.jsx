import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src="/Images/logotipo.png" alt="Logo Adoção Digital" />
          <h2>Adoção Digital</h2>
        </div>

        <nav className="footer__nav">
          <Link href="/adocao">Adoção</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <div className="footer__contact">
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@adocaodigital.com</p>
          <p>&copy; {new Date().getFullYear()} Adoção Digital</p>
        </div>
      </div>
    </footer>
  );
}
