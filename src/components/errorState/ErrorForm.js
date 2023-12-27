import React, { useState } from "react";
import { setErrorState } from "./errorStateSlice.js";
import { useDispatch, useSelector } from "react-redux";

const ErrorForm = () => {
  const [errorText, setErrorText] = useState('');
  console.log(errorText);

  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.error)

  return (
    errorState && 
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
  )
}

export default ErrorForm