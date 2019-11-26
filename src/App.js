import React from 'react';
import Hello from "./sayHello";
import Tweet from './Tweet';

function App(){
  const counter = 0;

  return(
    <div className="App">
      {/* <h1>Hello world!</h1> */}
      {/* <p>{counter}</p> */}
      {/* <p>this is hello component</p> */}
      {/* <Hello /> */}
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
