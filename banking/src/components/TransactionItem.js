import React from "react"
import {Link} from 'react-router-dom'

const TranactionItem=(props)=>(
    <div>
        <Link to={`/edit/${props.id}`}>
            <div  className="indigo darken-3 mt-2 p-3">
                <h2 className="text-white">Amount : {props.amount}</h2>
                <h2 className="text-white">To : {props.to}</h2>
                <h2 className="text-white">Memo : {props.memo}</h2>
                <h2 className="text-white">Type of Tranaction : {props.transactionType}</h2>
            </div>
        </Link>
    </div>
)

export default TranactionItem