import React, { useEffect } from 'react';
import Header from '../components/header';
import HeadBanner from '../components/headBanner';
import ProductsList from '../components/products/productsList';
import Footer from '../components/footer';
import { fetchItems } from '../redux/actions/pizzaItems';
import { useDispatch } from 'react-redux';

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
