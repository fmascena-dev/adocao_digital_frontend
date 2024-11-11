import { useState } from 'react';
import './Contato.scss';

export default function Contato() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação de campos obrigatórios
    if (!contact.name || !contact.email || !contact.phone || !contact.message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Exibir alerta de sucesso
    alert('Mensagem enviada com sucesso!');

    console.log('Dados de contato:', contact);

    // Limpar o formulário após o envio
    setContact({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>
        Contact <span className='me-contact'>Me!</span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label>
            Nome completo: <sup>*</sup>
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            placeholder="Digite o seu nome completo"
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label>
            E-mail: <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            placeholder="Digite o seu e-mail"
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label>
            Contato: <sup>*</sup>
          </label>
          <input
            type="number"
            name="phone"
            value={contact.phone}
            placeholder="Digite o seu número de contato"
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label>
            Assunto: <sup>*</sup>
          </label>
          <input
            type="text"
            name="subject"
            value={contact.subject}
            placeholder="Assunto"
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label>
            Mensagem: <sup>*</sup>
          </label>
          <textarea
            name="message"
            value={contact.message}
            cols="30"
            rows="10"
            placeholder="Escreva sua Mensagem"
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">
            Send Message
          </button>
        <p>
          <sup>*</sup> Preenchimento obrigatório
        </p>
        </div>
      </form>
    </section>
  );
}
