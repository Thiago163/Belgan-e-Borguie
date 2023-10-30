import React from 'react';
import './geral.css';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import MagicImage from '../assets/casa.png';

const HomePage = () => {
  return (
    <section className='bg-gray-100 py-20' id='home'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12'>

        <div className='lg:w-2/5 mb-10 lg:mb-0'>
          <h1 className='text-5xl lg:text-7xl font-bold mb-6 leading-tight text-black'>
            Bem vindos ao mágico projeto <span className='text-accent'>Belgan e Borguie</span>!
          </h1>
          <div className='text-lg lg:text-xl text-gray-700 font-medium'>
            <span className='mr-2'>Nesse jogo, você terá:</span>
            <TypeAnimation
              sequence={['Magia ✨', 1000, 'Zumbis 💀', 1000, 'História envolvente 📖', 900, 'E muito mais 🚀', 2000]}
              speed={80}
              wrapper='span'
              repeat={Infinity}
            />
          </div>
        </div>

        <div className='flex flex-col gap-8 lg:w-2/5 border-4 border-black rounded-md p-4'>
          {/* Seção de boas-vindas */}
          <div>
            <h3 className='text-2xl font-semibold text-black mb-2'>Explore a magia da contribuição!</h3>
            <p className='text-gray-600'>
              Fico radiante em ter você aqui. Descubra e mergulhe nesse projeto incrível.
            </p>
          </div>
          
          {/* Seção de formação */}
          <div>
            <h3 className='text-2xl font-semibold text-black mb-2'>O que precisamos para encantar?</h3>
            <p className='text-gray-600'>
              Magos da programação de jogos indie.
            </p>
          </div>

          {/* Espaço para a imagem mais larga, centralizada */}
          <img src={MagicImage} alt='Magia' className='mx-auto my-auto w-full lg:w-3/4 rounded-md shadow-md' />
        </div>

        {/* Links sociais */}
        <div className='flex justify-center lg:justify-end mt-12 lg:mt-0 space-x-4'>
          <a href='https://github.com/Thiago163' className='text-accent text-5xl lg:text-6xl'>
            <FaGithub />
          </a>
          <a href='https://www.instagram.com/thiagocruz163/?igshid=ZDdkNTZiNTM%3D' className='text-accent text-5xl lg:text-6xl'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/thiago-cruz163' className='text-accent text-5xl lg:text-6xl'>
            <FaLinkedin />
          </a>
          <a href='https://wa.me/qr/EUMZHUCMKY32B1' className='text-accent text-5xl lg:text-6xl'>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;