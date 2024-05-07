import React, { useState} from 'react'
import './App.css';
import Header from './Components/Header';
import SecaoBanner from './Components/SecaoBanner';
import SecaoExperiencia from './Components/SecaoExperiencia';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Sun from './assets/sun.png'
import Moon from './assets/moon.png'

function App() {

  const [temaClaro, setTemaClaro] = useState(true)
  let corTema = temaClaro ? 'white_mode' : 'dark_mode'

  const mudarTema = () => {  
    setTemaClaro(!temaClaro)
  }

  return (
    <div className="App">

      <Header 
      botaoTema={mudarTema} tipoTema={corTema}
      imageTema={temaClaro ? Moon : Sun} />

      <SecaoBanner tema={corTema}/>

      <SecaoExperiencia tema={corTema}>

        <Card
        data='JUNHO 2012 - 2016' cargo='Web Designer'
        empresa='Pied Piper StartUp.' funcao='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"'/>

        <Card
        data='AGOSTO 2016 - 2019' cargo='Product Designer'
        empresa='E Corp.' funcao='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"'/>

        <Card
        data='FEVEREIRO 2019 - 2021' cargo='Digital Consulting'
        empresa='Arasaka Inc.' funcao='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'/>

      </SecaoExperiencia>

      <Footer tema={corTema}/>
      
    </div>
  );
}

export default App;
