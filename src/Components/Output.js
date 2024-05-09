import React from "react";
import OutputRow from "./OutputRow";

export default function Output(props) {
  return (
    <div>
      <OutputRow value={props.answer} textSize={{ fontSize: "20px" }} />
      <OutputRow value={props.user} />
    </div>
  );
}
