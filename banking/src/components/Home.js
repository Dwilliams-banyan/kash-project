import React from 'react';
import Header from './components/Header'
import NavbarPage from './components/OurNavBar'
import Balance from "./components/OurBalance"
import Transactions from './components/Transactions';

function Home() {
  return (
    <div>
      <NavbarPage />
      <Header/>
     
      <Balance />
      <Transactions />
      
    </div>
  );
}

export default Home;
