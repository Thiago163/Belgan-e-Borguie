import React from 'react';
import Image from '../assets/avatar.png';
import './geral.css';
import AnotherImage from '../assets/livro.png';

const About = () => {
  return (
    <section className='section bg-apocalyptic-red section-descricao' id='about'>
      <div className='container mx-auto flex flex-col items-center justify-center lg:flex-row p-8 lg:p-16'>
        <div className='flex-shrink-0 order-2 lg:order-1'>
          <img src={Image} alt='Minha Foto' className='shadow-md w-80 h-80 mb-4 lg:mb-0' />
          <img src={AnotherImage} alt='Outra Imagem' className='shadow-md w-80 h-80' />
        </div>
        <div className='max-w-lg text-center lg:text-left relative p-6 lg:p-8 shadow-md bg-dark-grey rounded-md mysterious-border bg-white'>
          <h2 className='text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 text-purple-600'>Desbravando o Universo</h2>
          <div className="bg-white p-6 rounded-md text-black">
            <p className='text-lg lg:text-2xl mb-4'>
              Bem-vindo a este mundo pós-apocalíptico! Aqui, nas entranhas de uma história de um jogo indie, sou Thiago, o escritor desse projeto. Por enquanto, a jornada é desprovida de recompensas financeiras, mas repleta de desafios e descobertas.
            </p>
            <p className='text-lg lg:text-2xl mb-4'>
              A trama desvenda um apocalipse mágico, onde zumbis sobrenaturais reinam. Convido você a mergulhar na saga de dois irmãos destemidos. O mais velho empunha uma espada encantada, pronto para enfrentar qualquer desafio. Enquanto isso, o caçula domina magias, controlando três esferas que orbitão sobre sua mão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;