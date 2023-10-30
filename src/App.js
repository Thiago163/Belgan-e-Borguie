import React from 'react';
// components
import Descricao from './components/Descricao';
import Header from './components/Header';
import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Trabalhos from './components/Trabalhos';
import EndPage from './components/EndPage';
import CarouselPage from './components/CarouselPage';
import './index.css';

const App = () => {
  return (
    <div className='fundo'>
      <Header />
      <Descricao />
      <Nav />
      <Welcome />
      <Trabalhos />
      <CarouselPage />
      <EndPage />
    </div>
  );
};

export default App;
