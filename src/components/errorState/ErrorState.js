import "./errorState.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorState } from "./errorStateSlice.js";

const ReportErrorButton = () => {
  const [errorText, setErrorText] = useState('');
  console.log(errorText);

  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.error)

  const handleErrorStateButton = () => {
    dispatch(setErrorState(true));
  }
  console.log(errorState);

  return (
    <div className="errorReportContainer">
      <div>
        <button name="reportErrorButton" onClick={handleErrorStateButton}>
          Report Error
        </button>
      </div>
      {errorState && 
        <div className="errorReportPopup">
          <h3>Error report</h3>
          <button onClick={() => dispatch(setErrorState(false))}>Close</button>
          <textarea 
            placeholder="Describe the error..."
            value={errorText}
            onChange={(e) => setErrorText(e.target.value)}
          />
          <button type="submit" onClick={() => dispatch(setErrorState(false))}>Submit</button>
        </div>
      }
    </div>
  )
}

export default ReportErrorButton;