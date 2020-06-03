import React from 'react';
// import NavbarPage from './OurNavBar'
import Balance from "./OurBalance"
import Transactions from './Transactions';

function Home() {
  return (
    <div>
      <Balance />
      <Transactions />
    </div>
  );
}

export default Home;
