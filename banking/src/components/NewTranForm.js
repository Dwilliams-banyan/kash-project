import React, { Fragment, useState } from "react";
import {MDBBtn} from "mdbreact"
import '../styles/dropdown.css'
import { connect } from "react-redux";
import { addTransaction } from "../action/transactionAction";
import {subBalance, addBalance } from '../action/balanceAction';

const NewTranForm = ({addTransaction, history,subBalance,addBalance}) => {
    const [amount, setAmount] = useState('')
    const [to, setTo] = useState('')
    const [memo, setMemo] = useState('')
    const [transactionType, setTransActionType] = useState('deposit')

    const onSubmit = () => {
        addTransaction({
            amount,
            to,
            memo,
            transactionType
        })
        transactionType == "deposit" ? addBalance(parseInt(amount)) : subBalance(amount) 
        history.push('/')
    }

    
    return(
        <div>
            <form>
                <Fragment>
                    <div className=" text-center">
                        <label >Amount:{amount}</label>
                        <input type="text"  
                            value={amount} 
                            className="mx-auto form-control form-control-lg w-25" 
                            onChange={(e) => {
                                if(!e.target.value || e.target.value.match(/^\d{1,}(\.\d{0,2})?$/)){
                                    setAmount(e.target.value)
                                }
                            }} 
                        />
                    </div>

                    <div className="form-group text-center">
                        <label htmlFor="example2">Payable To :</label>
                        <input type="text" 
                            value={to} 
                            onChange={(e) => setTo(e.target.value)} 
                            placeholder="insert name" 
                            id="example2" 
                            className="mx-auto form-control form-control-lg w-50" 
                        />
                    </div>

                    <div className="form-group text-center">
                        <label htmlFor="example3">Memo</label>
                        <textarea 
                            value={memo} 
                            onChange={(e) => setMemo(e.target.value)} 
                            placeholder="memo of transaction" 
                            id="example3" 
                            className="mx-auto form-control form-control-lg w-50" />
                    </div>

                    <div className="text-center">
                        <div><label>Enter the type of transaction :</label></div>
                        <select 
                            className="bdb-select w-25 browser-default custom-select" 
                            value={transactionType} 
                            onChange={
                            (e) => setTransActionType(e.target.value)
                        }>
                        {/* <option disabled value="">Type Of Transaction</option> */}
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdrawer</option>
                            <option value="transfer">Transfer</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <MDBBtn onClick={onSubmit} gradient="blue">Submit</MDBBtn>
                    </div>
                    
                </Fragment>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    addTransaction,
    subBalance,
    addBalance
}

export default connect(undefined,mapDispatchToProps)(NewTranForm)