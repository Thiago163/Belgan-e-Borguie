import React, { useState } from 'react';
import './Header.css';
import './CarouselPage.css';
import './geral.css';
import { BsArrowRight } from 'react-icons/bs';
import casa from '../assets/casa.png';
import Monstros from '../assets/Monstros.png';
import branco from '../assets/branco.jpg';

const CarouselPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    casa,
    Monstros,
    branco,
    // Adicione mais URLs de imagens conforme necessário
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const scrollToContact = () => {
    // Adicione aqui a lógica para rolar até a seção de contato
    // Por exemplo: window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className="carousel-container section-carrossel">
      <div className="image-container">
        <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`} />
      </div>

      <div className="navigation-container">
        <button onClick={prevImage} className='btn nav-btn'>Anterior</button>
        <span className='image-counter'>Imagem {currentImage + 1} de {images.length}</span>
        <button onClick={nextImage} className='btn nav-btn'>Próxima</button>
      </div>

      <button className='btn contact-btn' onClick={scrollToContact}>
        <BsArrowRight /> Entrar em Contato
      </button>
    </div>
  );
};

export default CarouselPage;
