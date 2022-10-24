import React from 'react';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoInicio';
import Habitaciones from '../components/habitaciones';

const IndexPage = () => {
  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <Habitaciones />
    </Layout>
  )
}

export default IndexPage;
