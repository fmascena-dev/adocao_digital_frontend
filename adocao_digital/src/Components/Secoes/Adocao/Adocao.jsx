import './Adocao.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GrStatusGoodSmall } from 'react-icons/gr';

export default function Adocao() {
  const Pets = [
    {
      name: 'Bento',
      species: 'Rotweiller',
      birthdate: '20/09/2024',
      description: 'Filhote',
      status: 'Disponível',
      size: 'Pequeno',
      weight: '5kg',
      personality: 'Calmo',
      img: '/Images/bento_dog.jpeg',
    },
    {
      name: 'Luna',
      species: 'Bulldog',
      birthdate: '10/09/2024',
      description: 'Filhote',
      status: 'Disponível',
      size: 'Médio',
      weight: '7kg',
      personality: 'Brincalhona',
      img: '/Images/samuca_cat.jpeg',
    },
    {
      name: 'Bela',
      species: 'Gato',
      birthdate: '10/09/2024',
      description: 'Filhote',
      status: 'Disponível',
      size: 'Médio',
      weight: '3kg',
      personality: 'Brincalhona',
      img: '/Images/bela_cat.jpg',
    },
    {
      name: 'Kira',
      species: 'Pitbull',
      birthdate: '10/05/2024',
      description: 'Adulto',
      status: 'Indisponível',
      size: 'Grande Porte',
      weight: '15kg',
      personality: 'Brincalhona',
      img: '/Images/kira_dog.jpg',
    },
    {
      name: 'Max',
      species: 'Rotweiller',
      birthdate: '10/08/2024',
      description: 'Filhote',
      status: 'Disponível',
      size: 'Médio',
      weight: '7kg',
      personality: 'Brincalhona',
      img: '/Images/max_dog.jpg',
    },
  ];

  const [selectedPet, setSelectedPet] = useState(null);

  const handleAdopt = (pet) => {
    setSelectedPet(pet);
    alert(`Você escolheu adotar ${pet.name}!`);
  };

  return (
    <>
      <section className="titulo_adocao">
        <h3>Escolha um Pet para Adoção</h3>
      </section>
      <section className="sec_adocao">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          speed={1000}
        >
          {Pets.map((pet, index) => (
            <SwiperSlide key={index}>
              <figure>
                <img src={pet.img} alt={pet.name} />
                <figcaption>
                  <h4>{pet.name}</h4>
                  <p>
                    <span>Espécie:</span> {pet.species}
                  </p>
                  <p>
                    <span>Data de Nascimento:</span> {pet.birthdate}
                  </p>
                  <p>
                    <span>Descrição:</span> {pet.description}
                  </p>
                  <p>
                    <span>Status:</span> {pet.status}{' '}
                    <GrStatusGoodSmall
                      style={{
                        color: pet.status === 'Disponível' ? '#c8ff00' : '#FF0000',
                      }}
                    />
                  </p>
                  <p>
                    <span>Tamanho:</span> {pet.size}
                  </p>
                  <p>
                    <span>Peso:</span> {pet.weight}
                  </p>
                  <p>
                    <span>Personalidade:</span> {pet.personality}
                  </p>
                  {pet.status === 'Disponível' ? (
                    <button
                      onClick={() => handleAdopt(pet)}
                      className="adopt-btn"
                    >
                      Adotar {pet.name}
                    </button>
                  ) : (
                    <p className="unavailable">Indisponível para Adoção</p>
                  )}
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {selectedPet && (
        <section className="confirmation">
          <h4>Confirmação de Adoção</h4>
          <p>
            Você escolheu adotar: <strong>{selectedPet.name}</strong>
          </p>
          <p>
            <span>Espécie:</span> {selectedPet.species}
          </p>
          <p>
            <span>Personalidade:</span> {selectedPet.personality}
          </p>
          <p>Entraremos em contato para finalizar o processo de adoção.</p>
        </section>
      )}
    </>
  );
}
