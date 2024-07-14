import React from 'react';
import './App.css';
import ServiceRequestForm from './Components/ServiceRequestForm';
import ServiceRequestList from './Components/ServiceRequestList';

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Service Request Management</h1>
      </header> */}
      <main>
        <ServiceRequestForm />
        <ServiceRequestList />
      </main>
    </div>
  );
};

export default App;

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
