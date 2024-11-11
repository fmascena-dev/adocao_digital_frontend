import './Conheca.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

export default function Conheca() {
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
      status: 'Disponível',
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

  return (
    <>
      <section className="titulo_conheca">
        <h3>Conheça nossos Pets</h3>
      </section>
      <section className="sec_conheca">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          watchSlidesProgress={true}
          observeParents={true}
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
                    <span>Status:</span> {pet.status}
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
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
          ;
        </Swiper>
      </section>
    </>
  );
}
