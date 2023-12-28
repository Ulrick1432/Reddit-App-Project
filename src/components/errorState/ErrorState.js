import React from "react";
import { useDispatch } from "react-redux";
import { setErrorState } from "./errorStateSlice.js";

const ReportErrorButton = () => {
  const dispatch = useDispatch();

  const handleErrorStateButton = () => {
    dispatch(setErrorState(true));
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