import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../styles/dropdown.css'


const FormPage = () => {

return (
    <div>
    
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form >
        <p className="h4 text-center mb-4 purple accent-5">EDIT MEMO</p>
        <label htmlFor="defaultFormContactNameEx" className="purple-text">
          TO:
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="purple-text">
          AMOUNT:
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <div>
            <select className="mdb-select purple-text">
                <option disabled selected>Choose your option</option>
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="transfer">Transfer</option>
            </select>
        </div>
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="purple-text">
        MEMO:
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn color="purple" outline type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    </div>
      );
    };

 
      export default FormPage;