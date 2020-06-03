import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../styles/dropdown.css'


const EditPage = () => {
 
return (
    <div className='text-center' >
      <div className='mx-auto' style={{width: '40%'}}>
         <h1 className='text-center  purple darken-2 mr-5' >Edit Memo</h1>
      </div>
      <h2 className='text-center  '>Date: 06/03/2020</h2>
      <h2 className='text-center'>Transaction Type: Withdrawl</h2>
    <h2 className='text-center'>Amount: $300</h2>
    <br/>
    <h2 className='text-center'>TO: Persevere</h2>
    <br/><br/>
    <div className='text-center'>
    <textarea className="shadow-box-example z-depth-3 block-example border border-dark" style={{width: '40%'}} >Enter Memo:</textarea>
    </div>
    </div>
      );
    };

 
      export default EditPage;