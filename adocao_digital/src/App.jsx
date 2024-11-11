import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Adocao from './Components/Secoes/Adocao/Adocao';
import Conheca from './Components/Secoes/Conheca/Conheca';
import Cadastro from './Components/Secoes/Cadastro/Cadastro';
import Contato from './Components/Secoes/Contato/Contato';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/adocao" element={<Adocao />} />
          <Route path="/conheca" element={<Conheca />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
