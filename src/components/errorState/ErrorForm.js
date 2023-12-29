//When the button in the ErrorState component is clicked this component popup in the content
import "./errorForm.css"
import React, { useState } from "react";
import { setErrorState } from "./errorStateSlice.js";
import { useDispatch, useSelector } from "react-redux";

const ErrorForm = () => {
  const [errorText, setErrorText] = useState('');// This is for now used to contain the input values from the textarea

  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.error) //Get's the value of "state error" from the store

  return (
    errorState && 
    <div className="errorFormContainer" data-testid='errorFormContainer'>
      <div className="errorForm">
        <h3>Error report</h3>
        <button onClick={() => dispatch(setErrorState(false))} data-testid='closeError'>Close</button>
        <textarea 
          placeholder="Describe the error..."
          value={errorText}
          onChange={(e) => setErrorText(e.target.value)}
          data-testid='errorTextarea'
        />
        <button 
          type="submit" 
          onClick={() => dispatch(setErrorState(false))} 
          data-testid='submitButton'
          >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ErrorForm