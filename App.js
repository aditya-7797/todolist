import React from 'react';
import Header from './Header';
import Add from './Add';
import bgimgtodolist from './bgimgtodolist.jpg'; 
import './App.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
    <header className='cu'>
      <Header />
      <Add />
      </header> 
    </div>
  );
}

export default App;
