import { useState } from 'react';
import PropTypes from 'prop-types';
import './Cadastro.scss';

export default function Cadastro({ addAdopter }) {
  const [adopter, setAdopter] = useState({
    name: '',
    email: '',
    cpf: '',
    phone: '',
    endereco: {
      rua: '',
      bairro: '',
      cidade: '',
      numero: '',
    },
    dataNascimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['rua', 'bairro', 'cidade', 'numero'].includes(name)) {
      setAdopter({
        ...adopter,
        endereco: { ...adopter.endereco, [name]: value },
      });
    } else {
      setAdopter({ ...adopter, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (
      !adopter.name ||
      !adopter.email ||
      !adopter.cpf ||
      !adopter.phone ||
      !adopter.endereco.rua ||
      !adopter.endereco.bairro ||
      !adopter.endereco.cidade ||
      !adopter.endereco.numero ||
      !adopter.dataNascimento
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    addAdopter(adopter);
    setAdopter({
      name: '',
      email: '',
      cpf: '',
      phone: '',
      endereco: {
        rua: '',
        bairro: '',
        cidade: '',
        numero: '',
      },
      dataNascimento: '',
    });
  };

  return (
    <section className="section-cad">
      <div className="cadastro">
        <h2>Cadastro de Adotante</h2>
        <form onSubmit={handleSubmit}>
          <div className="cadastro-form">
            <label>
              Nome:<sup>*</sup>
            </label>
            <input
              type="text"
              name="name"
              value={adopter.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div className="cadastro-form">
            <label>
              Email:<sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              value={adopter.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              required
            />
          </div>
          <div className="cadastro-form">
            <label>
              CPF:<sup>*</sup> (SOMENTE NÚMEROS)
            </label>
            <input
              type="number"
              name="cpf"
              value={adopter.cpf}
              onChange={handleChange}
              placeholder="Digite seu CPF"
              required
            />
          </div>
          <div className="cadastro-form">
            <label>
              Telefone:<sup>*</sup>
            </label>
            <input
              type="tel"
              name="phone"
              value={adopter.phone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
              required
            />
          </div>
          <div className="cadastro-form">
            <label>
              Endereço:<sup>*</sup>
            </label>
            <div className="cadastro-form-end">
              <label>
                Rua:<sup>*</sup>
              </label>
              <input
                type="text"
                name="rua"
                value={adopter.endereco.rua}
                onChange={handleChange}
                placeholder="Digite sua Rua"
                required
              />
              <label>
                Bairro:<sup>*</sup>
              </label>
              <input
                type="text"
                name="bairro"
                value={adopter.endereco.bairro}
                onChange={handleChange}
                placeholder="Digite seu Bairro"
                required
              />
            </div>
            <div className="cadastro-form-end">
              <label>
                Cidade:<sup>*</sup>
              </label>
              <input
                type="text"
                name="cidade"
                value={adopter.endereco.cidade}
                onChange={handleChange}
                placeholder="Digite sua Cidade"
                required
              />
              <label>
                Número:<sup>*</sup>
              </label>
              <input
                type="number"
                name="numero"
                value={adopter.endereco.numero}
                onChange={handleChange}
                placeholder="Digite seu Número"
                required
              />
            </div>
          </div>
          <div className="cadastro-form">
            <label>
              Data de Nascimento:<sup>*</sup>
            </label>
            <input
              type="date"
              name="dataNascimento"
              value={adopter.dataNascimento}
              onChange={handleChange}
              placeholder="DD/MM/AAAA"
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <sub>
          <p>
            <sup>*</sup> Preenchimento obrigatório
          </p>
        </sub>
      </div>
    </section>
  );
}

Cadastro.propTypes = {
  addAdopter: PropTypes.func.isRequired,
};
