import React, { Fragment } from "react";
import {MDBBtn} from "mdbreact"
import '../styles/dropdown.css'
import { connect } from "react-redux";
import { addTransaction, deleteTransaction } from "../action/transactionAction";

class NewTranForm extends React.Component{
    
    state = {
        memo : this.props.transaction ? this.props.transaction.memo: "",
        to : this.props.transaction ? this.props.transaction.to : "",
        transactionType : this.props.transaction ? this.props.transaction.transactionType : "",
        amount : this.props.transaction ? this.props.transaction.amont : "",
        error : undefined
    }
    
    memoChange =(e)=>{
        const memo = e.target.value
        this.setState(()=>({memo}))
    }

    amountChange =(e)=>{
        const amount = e.target.value
        this.setState(()=>({amount}))
    }

    payToChange =(e)=>{
        const to = e.target.value
        this.setState(()=>({to}))
    }

    onSubmit =(e)=>{
        e.preventDefault()
        if(!this.state.to || !this.state.transactionType || !this.state.amount){
            this.setState({error:"Can not complete transaction review your form."})
        }
        else {
            this.setState(()=>({
                memo : this.state.memo,
                to : this.state.to,
                transactionType : this.state.transactionType,
                amount :  this.state.amount
            }))
            this.props.addTransaction(this.state)
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                <Fragment>
                    <div className=" text-center">
                        <label >Amount:{this.state.amount}</label>
                        <input type="text"   className="mx-auto form-control form-control-lg w-25" onChange={this.amountChange} />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example2">Payable To :</label>
                        <input type="text" onChange={this.payToChange} placeholder="payment" id="example2" className="mx-auto form-control form-control-lg w-50" />
                    </div>
                    <div className="form-group text-center">
                        <label htmlFor="example3">Memo</label>
                        <textarea onChange={this.memoChange} placeholder="memo of transaction" id="example3" className="mx-auto form-control form-control-lg w-50" />
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
                        <MDBBtn gradient="blue" >Submit</MDBBtn>
                    </div>
                </Fragment>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    addTrans: (transaction) => dispatch(addTransaction(transaction)),
    delTrans: (transaction) => dispatch(deleteTransaction(transaction))
})

export default connect(undefined,mapDispatchToProps)(NewTranForm)