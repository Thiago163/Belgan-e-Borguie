import React from 'react';
import { FaCheck, FaTimes, FaPrescriptionBottle, FaGamepad } from 'react-icons/fa';
import './geral.css';

const ContatoPage = () => {
  return (
    <section className='bg-gray-100 py-20' id='contato'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12'>

        <div className='lg:w-2/5 mb-10 lg:mb-0'>
          <h1 className='text-5xl lg:text-7xl font-bold mb-6 leading-tight text-black'>
            Entre em Contato
          </h1>
          <p className='text-lg lg:text-xl text-gray-700 font-medium'>
            Fique à vontade para me contatar para mais informações ou colaborações. Estou ansioso para ouvir de você!
          </p>

          {/* Links sociais */}
          <div className='flex justify-center lg:justify-end mt-12 lg:mt-0 space-x-4'>
            <a href='https://github.com/Thiago163' className='text-accent text-5xl lg:text-6xl'>
              <FaCheck />
            </a>
            <a href='https://www.instagram.com/thiagocruz163/?igshid=ZDdkNTZiNTM%3D' className='text-accent text-5xl lg:text-6xl'>
              <FaGamepad />
            </a>
            <a href='https://www.linkedin.com/in/thiago-cruz163' className='text-accent text-5xl lg:text-6xl'>
              <FaPrescriptionBottle />
            </a>
            <a href='https://wa.me/qr/EUMZHUCMKY32B1' className='text-accent text-5xl lg:text-6xl'>
              <FaTimes />
            </a>
          </div>
        </div>

        {/* Formulário de Contato ou Outras Informações */}
        <div className='flex flex-col gap-8 lg:w-2/5 border-4 border-black rounded-md p-4'>
          {/* Adicione um formulário de contato ou outras informações relevantes aqui */}
          <p className='text-lg text-gray-700 font-medium'>
            envie um e-mail para thiagocruz163@gmail.com.
          </p>
          {/* Adicione seu formulário ou outras informações aqui */}
        </div>
      </div>
    </section>
  );
};

export default ContatoPage;