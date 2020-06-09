import React, { Fragment, useState } from "react";
import {connect} from 'react-redux'
import '../styles/dropdown.css'
import { MDBBtn } from "mdbreact";
import {editMemo} from '../action/transactionAction'


const EditPage = ({transaction,history,editMemo}) => {
  const [memo, setMemo] = useState(transaction ? transaction.memo : '')

  const onSubmit = () => {
    editMemo(transaction.id, memo)
    history.push('/')
  }

  if(!transaction){
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    )
  }else{
      return (
        <div className='text-center' >
          <div className='mx-auto' style={{width: '40%'}}>
             <h1 className='text-center' >Edit Memo</h1>
          </div>

          <h2 className='text-center  '>Amount: {transaction.amount}</h2>

          <h2 className='text-center'>Payable to: {transaction.to}</h2>

          <h2 className='text-center'>Transaction Type: {transaction.transactionType}</h2>

          <br/>
          <br/> 
          <br/>
          
          <form>
            <Fragment>
              <div className="form-group">

                <label> Eneter memo for transaction :</label>

                <textarea 
                className="mx-auto shadow-box-example z-depth-3 block-example border border-dark form-control form-control-lg w-50" 
                value={memo} 
                onChange={(e) => setMemo(e.target.value)}
                />
              </div>

              <div className="text-center">
                <MDBBtn className="indigo darken-3" onClick={onSubmit}>Submit</MDBBtn>
              </div>

            </Fragment>
          </form> 

        </div>
      );
    }
}

const mapStateToProps=(state,props)=>({
  transaction : state.transaction.find(item => item.id === props.match.params.id)
})
const mapDispatchToProps = {
  editMemo
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPage)