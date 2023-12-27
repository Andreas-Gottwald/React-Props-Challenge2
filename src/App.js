import React from "react";
import "./styles.css";

export default function App() {
  return <Sum ValueA={6} ValueB={8} />;
}

function Sum({ ValueA, ValueB }) {
  return (
    <h1>
      The result of {ValueA} and {ValueB} is: {ValueA + ValueB}
    </h1>
  );
}
