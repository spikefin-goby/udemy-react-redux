import React from 'react';

// function App() {
//   // const greeting = 'Hia!!!'
//   // const dom = <h1 className="foo">{greeting}</h1>
//   const input = <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       {input}
//     </React.Fragment>
//   );
// }

function App() {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

function Cat() {
  return <div>Meow!!</div>
}

export default App;
