import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>SALCHIPAPA DEL DIA</h1>
      <p>Una salvajada que cuenta con lechuga, cebolla y pimenton a la grille, papas a la francesa, salchichas, pechuga de pollo, chorizo, butifarra, queso costeño, ripio de papa y salsa de la casa</p>
      <FeatureButton href='https://wa.link/7n8tg3' target='_blank' aria-label='WhatsApp'>WhatsApp 3127059864</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
