import { Link } from 'react-router-dom';
import './Main.scss';

export default function Main() {
  return (
    <>
      <section className="titulo">
        <h1>Por que Adotar?</h1>
      </section>

      <main className="container">
        <article className="sub_container">
          <figure>
            <img
              className="imagem"
              src="/Img_Main/passeio_com_cao.png"
              alt="Pessoa passeando com cão"
            />
          </figure>
          <div className="texto_container">
            <h2 className="subtitulo">Nesse exato momento,</h2>
            <p className="descricao">
              existem milhares de doguinhos e gatinhos esperando um humano para
              chamar de seu.
            </p>
          </div>
        </article>

        <article className="sub_container">
          <figure>
            <img className="imagem" src="/Img_Main/gatinho.png" alt="Gatinho" />
          </figure>
          <div className="texto_container">
            <h2 className="subtitulo">E não há recompensa maior</h2>
            <p className="descricao">
              do que vê-los se tornando aquela coisinha alegre e saudável depois
              de uma boa dose de cuidado e carinho.
            </p>
          </div>
        </article>

        <article className="sub_container">
          <figure>
            <img
              className="imagem"
              src="/Img_Main/cachorroColo.png"
              alt="Cachorro no colo"
            />
          </figure>
          <div className="texto_container">
            <h2 className="subtitulo">Pensando bem, a pergunta é:</h2>
            <p className="descricao">
              Se você pode mudar o destino de um animal de rua, por que não
              faria isso?
            </p>
          </div>
        </article>
      </main>

      <section className="botao_container">
        <Link to={'/adocao'}>
          <button className="botao_adotar">Encontrar meu novo amigo</button>
        </Link>
      </section>
    </>
  );
}
