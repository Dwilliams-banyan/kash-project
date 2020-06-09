import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from 'react-redux';

const Balance=(props) =>(
    <div>
        <MDBContainer className="container-fluid pl-0">
            <MDBRow className="text-center display-4">
                <MDBCol size="12">BALANCE :${props.balance}</MDBCol>
                <MDBCol className="p-5 text-center" size="12"><h4>Transactions :</h4></MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
)

const mapStateToProps=(state)=>({
    balance : state.balance
})

export default connect(mapStateToProps)(Balance)

