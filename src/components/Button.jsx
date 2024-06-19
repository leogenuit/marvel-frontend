import React from "react";

const Button = ({ text }) => {
  return (
    <div className="w-40 text-center text-white text-lg border-2 border-white p-1 rounded-2xl hover:shadow-box-shadow">
      {text}
    </div>
  );
};

export default Button;
