import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Meme from './components/meme.js';
import img1 from './logo192.png';
import memeCard from './components/MemeCard.js'
import Conditions from './components/conditions.js';
import Ternary from './components/ternary';
import ThingAdder from './components/ThingAdder';
import ComplexState from './components/ComplexState';
import tailwindCSS from './components/tailwindCSS';

function App() {
  
  function Hover(){
    console.log("i am rendered")
  }

  return (
    
    <div className="App">
        <Header />
        <Conditions />
        <ComplexState />
       
    </div>
  );
}

export default App;
