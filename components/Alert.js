import { useState, useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className="pt-2">
      <p className={`${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
