import React, { Fragment } from "react";
import { MDBJumbotron, MDBContainer, MDBBtn } from "mdbreact";
import OurNavBar from './OurNavBar'
import { Link } from "react-router-dom";

const Header = ({history}) => {
  return (
    <div>
      <OurNavBar />

      <MDBJumbotron fluid className="green darken-3">

        <MDBContainer className="text-center">
          <h2 className="display-4 text-white">KASH APP!</h2>
          <p className="lead text-white">Welcome to Kash App, we are here to help you keep track of your transactions and balance. If you need any help click on the assist button.</p>

          <Fragment>
            <Link to="help_page">
              <MDBBtn className="indigo darken-3">ASSISTANCE</MDBBtn>
            </Link>
          </Fragment>

        </MDBContainer>
        
      </MDBJumbotron>
    </div>
  )
}

export default Header;