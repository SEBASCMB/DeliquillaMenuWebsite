import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='ELIGE TU FAVORITO' data={productData} />
      <Feature />
      <Products heading='LIMONADAS' data={productDataTwo} />
      <Products heading='ADICIONES' data={productDataThree} />
      <Footer />
    </Router>
  );
}

export default App;
