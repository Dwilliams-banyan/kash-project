import React from 'react';
import Header from './Header'
import NavbarPage from './OurNavBar'
import Balance from "./OurBalance"
import Transactions from './Transactions';

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
