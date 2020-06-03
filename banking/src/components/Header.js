import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import ButtonPage from './OurButtons'
import OurNavBar from './OurNavBar'

const Header = () => {
  return (
    <div>
      <OurNavBar />
      <MDBJumbotron fluid className="purple-gradient">
        <MDBContainer className="text-center">
          <h2 className="display-4">KASH APP!</h2>
          <p className="lead">Welcome to Kash App, we are here to help you keep track of your transactions and balance. If you need any help click on the assist button.</p>
          <ButtonPage />
        </MDBContainer>
      </MDBJumbotron>
    </div>
  )
}

export default Header;