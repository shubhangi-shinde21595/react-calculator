import React from "react";
import "./outputRow.css";

export default function OutputRow(props) {
  return (
    <div>
      <input
        type="text"
        readOnly
        className="srceen"
        style={props.textSize}
        value={props.value}
      />
    </div>
  );
}
