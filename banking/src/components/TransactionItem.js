import React from "react"
import {Link} from 'react-router-dom'

const TranactionItem=(props)=>(
    <div>
        <h2>Amount : {props.amount}</h2>
        <h2>To : {props.to}</h2>
        <h2>Memo : {props.memo}</h2>
        <h2>Type of Tranaction : {props.transactionType}</h2>
    </div>
)

export default TranactionItem