import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";
import { Link } from "react-router-dom";

const HelpPage = ()=> {
    return (
      <MDBRow>
        <MDBCol>
          <Link to="new">
            <MDBCard
                className="card-image"
                style={{
                backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
                }}
            >
                <div 
                className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4"
                >
                    <div>
                        <h5 className="green-text">
                        <MDBIcon icon="chart-pie"/> Deposit
                        </h5>
                        <MDBCardTitle tag="h3" className="pt-2">
                        <strong>To add to your acount</strong>
                        </MDBCardTitle>
                        <p>
                        Click here to access the new transaction page, there will be a form in which you will fill in the information of what you need done. Before you submit the form be sure that the type of your transaction is deposit.
                        </p>
                    </div>
                </div>
            </MDBCard>
          </Link>
        </MDBCol>

        <MDBCol>
            <Link to="new">
                <MDBCard
                className="card-image"
                style={{
                backgroundImage:
                    "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
                }}
            >
                <div 
                className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4"
                >
                    <div>
                        <h5 className="green-text">
                        <MDBIcon icon="desktop" /> Withdraw or Transfer
                        </h5>
                        <MDBCardTitle tag="h3" className="pt-2">
                        <strong>To make payments/withdrawals</strong>
                        </MDBCardTitle>
                        <p>
                        Click here to access the new transaction page, there will be a form in which you will fill in the information of what you need done. Before you submit the form be sure that the type of your transaction is withdrawal or transfer.
                        </p>
                    </div>
                </div>
            </MDBCard>
            </Link>
        </MDBCol>
      </MDBRow>
    );
  }


export default HelpPage