import React from 'react';
import Header from '../components/header';
import HeadBanner from '../components/headBanner';
import ProductsList from '../components/products/productsList';
import Footer from '../components/footer';


export default function Home() {
  
  return (
    <>
      <Header />
      <HeadBanner />
      <ProductsList />
      <Footer />
    </>
  );
}
