import React from 'react';


declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

function App() {

  return (
    <>
      <div>Hello</div>
      <p> My name is Genaro </p>
    </>
  )
}

export default App;
