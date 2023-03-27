import { useState, useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div className="pt-2 px-4 md:px-8 lg:px-16 2xl:px-24">
      <p className={`${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
