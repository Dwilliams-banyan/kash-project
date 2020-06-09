import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";
import TranactionItem from "./TransactionItem";



const Transactions = (props) => {
  return (
      <div className="container-fluid">        
        <MDBContainer>
          <MDBRow >
              <MDBCol size="12">
                {props.transaction.map(item =>(
                  <TranactionItem  key={item.id} {...item}/>
                  ))}
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