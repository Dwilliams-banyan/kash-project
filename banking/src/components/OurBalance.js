import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Balance=() =>(
    <div>
        <MDBContainer className="container-fluid pl-0">
            <MDBRow>
                <MDBCol size="12">BALANCE :</MDBCol>
                <MDBCol size="12"><h4>Transactions :</h4></MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
)

export default Balance

