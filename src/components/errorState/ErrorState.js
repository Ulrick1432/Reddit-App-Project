import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorState } from "./errorStateSlice.js";

const ReportErrorButton = () => {
  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.error)

  const handleErrorStateButton = () => {
    dispatch(setErrorState(true));
  }

  return (
    <div className="reportErrorButton Container">
      <div>
        <button name="reportErrorButton" onClick={handleErrorStateButton}>
          Report Error
        </button>
      </div>
    </div>
  )
}

export default ReportErrorButton;