import React, { Fragment } from "react";
import {MDBBtn} from "mdbreact"
import '../styles/dropdown.css'

class NewTranForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        amount: 0,
        balance: 0 
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange=(event)=>{
        this.setState({
            amount: event.target.value
        });
//     handleSubmit=(event)=>{
//         this.setState({
//            balance: this.state.amount + this.state.balance
//         });
//     }
//    }
    render(){
        return(
            <div>
                <Fragment>
                    <div className="form-group text-center">
                        <label htmlFor="example1">Amount :</label>
                        <input name='amount' type="number" value={this.state.amount}  className="mx-auto form-control form-control-lg w-25" onChange={this.handleChange} />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example2">Payable To :</label>
                        <input type="text" placeholder="payment" id="example2" className="mx-auto form-control form-control-lg w-50" />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example3">Memo</label>
                        <textarea placeholder="memo of transaction" id="example3" className="mx-auto form-control form-control-lg w-50" />
                    </div>

                    <div className="text-center">
                        <div><label>Enter the type of transaction :</label></div>
                        <select className="bdb-select w-25 browser-default custom-select">
                        {/* <option disabled value="">Type Of Transaction</option> */}
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdrawer</option>
                            <option value="transfer">Transfer</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <MDBBtn gradient="blue">Submit</MDBBtn>
                    </div>
                </Fragment>
            </div>
        )
    }
}

export default NewTranForm