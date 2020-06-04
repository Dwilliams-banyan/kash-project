import React from "react"
import {Link} from 'react-router-dom'

const TranactionItem=(props)=>(
    <div>
        <Link to={`/edit/${props.id}`}>
            <div  className="purple lighten-5 mt-5">
                <h2 className="text-dark">Amount : {props.amount}</h2>
                <h2 className="text-dark">To : {props.to}</h2>
                <h2 className="text-dark">Memo : {props.memo}</h2>
                <h2 className="text-dark">Type of Tranaction : {props.transactionType}</h2>
            </div>
        </Link>
    </div>
)

export default TranactionItem