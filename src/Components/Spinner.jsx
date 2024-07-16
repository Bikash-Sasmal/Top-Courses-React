import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="spinner"></div>
      <p className="text-bgDark text-lg foot-semi4bold">Loading...</p>
    </div>
  );
};

export default Spinner;
