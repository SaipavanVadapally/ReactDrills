// @jsxImportSource react
import React from 'react';

import { useState } from "react";
import "./BoxCard.css";

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);

  return (
    <div className={!!show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="trigger">
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
