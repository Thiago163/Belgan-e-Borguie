import { FaCheck, FaTimes, FaBaby, FaPrescriptionBottle, } from 'react-icons/fa';
import './geral.css';
import casa from '../assets/casa.png';
import mundos from '../assets/mundos.png';
import Monstros from '../assets/Monstros.png';

const Trabalhos = () => {

  const featuresData = [
    {
      icon: <FaCheck />,
      title: 'Gráficos Pixel Art',
      description: 'Estilo de arte pixelizada incrível',
    },
    {
      icon: <FaCheck />,
      title: 'Programação Básica',
      description: 'Lógica e estrutura inicial do jogo',
    },
    {
      icon: <FaTimes />,
      title: 'Níveis Criados',
      description: 'Precisamos de mais designs de níveis',
    },
    {
      icon: <FaTimes />,
      title: 'Áudio Implementado',
      description: 'Falta trilha sonora e efeitos sonoros',
    },
  ];

  const needsData = [
    {
      icon: <FaPrescriptionBottle />,
      title: 'Programadores',
      description: 'Necessitamos de desenvolvedores para aprimorar a programação.',
      link: 'https://cad.onshape.com/signin',
      image: Monstros,
    },
    {
      icon: <FaBaby />,
      title: 'Level Designers',
      description: 'Precisamos de mentes criativas para criar novos desafios.',
      link: 'https://cuidadores.netlify.app/',
      image: casa,
    },
    {
      icon: <FaBaby />,
      title: 'Audio Makers',
      description: 'Procuramos especialistas em áudio para criar uma experiência imersiva.',
      link: 'https://cuidadores.netlify.app/',
      image: casa,
    },
  ];

  return (
    <>
      <section className='section bg-apocalyptic-red mt-8 section-trabalhos' id='game-progress'>
        <div className='container mx-auto flex flex-col items-center justify-center lg:flex-row p-8 lg:p-16'>
          <div className='flex-shrink-0 order-2 lg:order-1'>
            <img src={mundos} alt='Mundos' className='shadow-md w-80 h-80 mb-4 lg:mb-0 rounded-md' />
            <img src={Monstros} alt='Monstros' className='shadow-md w-80 h-80 rounded-md' />
          </div>
          <div className='max-w-lg text-center lg:text-left relative p-6 lg:p-8 shadow-md bg-dark-grey rounded-md mysterious-border bg-white'>
            <h2 className='text-4xl lg:text-6xl font-bold mb-4 lg:mb-8 text-purple-600'>Progresso do Jogo</h2>

            <div className="bg-white p-6 rounded-md text-black">
              <div className='mb-6'>
                <h3 className='text-xl font-bold mb-3'>O que já temos:</h3>
                {featuresData.map((feature, index) => (
                  <div key={index} className='mb-4 flex items-center'>
                    <div className='mr-2 text-green-500'>{feature.icon}</div>
                    <div>
                      <h4 className='text-lg font-semibold'>{feature.title}</h4>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className='text-xl font-bold mb-3'>O que precisamos:</h3>
                {needsData.map((need, index) => (
                  <a key={index} href={need.link} target="_blank" rel="noopener noreferrer" className='bg-white rounded-lg p-6 shadow-lg cursor-pointer mb-6 flex items-center'>
                    <div className='mr-4 relative'>
                      <img src={need.image} alt={need.title} className='w-16 h-auto rounded-md' />
                    </div>
                    <div>
                      <h4 className='text-xl font-semibold text-black mb-1'>{need.title}</h4>
                      <p className='text-gray-600'>{need.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trabalhos;