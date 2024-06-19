import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-32 text-center bg-white  text-red-marvel text-md border-2 border-white p-1 rounded-2xl hover:shadow-box-shadow">
      {text}
    </div>
  );
};

export default Button;
