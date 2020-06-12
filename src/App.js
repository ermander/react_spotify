import React from 'react';
import './App.css';
import "./style.css"
import "./homestyle.css"
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Artist from './Components/Artist';



function App() {
  return (
    <div className="App">
      <Artist />
      {/* <Sidebar />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
