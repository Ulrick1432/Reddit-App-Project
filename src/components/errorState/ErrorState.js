//This is the ReportErrorButtton
import React from "react";
import { useDispatch } from "react-redux";
import { setErrorState } from "./errorStateSlice.js";

const ReportErrorButton = () => {
  const dispatch = useDispatch();

  const handleErrorStateButton = () => {
    dispatch(setErrorState(true)); // Changes the global state of ErrorState to true so that the ErrorForm component will popup in the top of the centent.
  }

  return (
    <div className="reportErrorButton Container" data-testid='reportErrorButtonContainer'>
      <div>
        <button name="reportErrorButton" onClick={handleErrorStateButton} data-testid='reportErrorButton' >
          Report Error
        </button>
      </div>
    </div>
  )
}

export default ReportErrorButton;