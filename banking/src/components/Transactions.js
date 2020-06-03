import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";
import TranactionItem from "./TransactionItem";


const Transactions = (props) => {
  return (
      <div className="container-fluid">
        {console.log(props)}
    <MDBContainer className="purple lighten-5 ">
      <MDBRow >
        <MDBCol size="12">
          <div  className="mt-4">
            {props.transaction.map(item =>(
              <TranactionItem key={item.id} {...item}/>
              ))}
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}

const mapStateToProps=(state)=>({
    transaction: state.transaction
})

export default connect(mapStateToProps)(Transactions);