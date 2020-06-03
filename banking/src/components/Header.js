import React, { Fragment } from "react";
import { MDBJumbotron, MDBContainer, MDBBtn } from "mdbreact";
import OurNavBar from './OurNavBar'

const Header = () => {
  return (
    <div>
      <OurNavBar />
      <MDBJumbotron fluid className="purple-gradient">
        <MDBContainer className="text-center">
          <h2 className="display-4">KASH APP!</h2>
          <p className="lead">Welcome to Kash App, we are here to help you keep track of your transactions and balance. If you need any help click on the assist button.</p>
          <Fragment>
            <MDBBtn gradient="aqua">ASSISTANCE</MDBBtn>
          </Fragment>
        </MDBContainer>
      </MDBJumbotron>
    </div>
  )
}

export default Header;