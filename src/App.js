import {useState} from 'react';
import './App.css';

// react components


// props allows you to pass data through dynamic components of react


const App = () => { 
  // hook
  const [counter,setCounter] = useState(0);
  return (
    <div className="App">
    <button onClick={() => setCounter((prevCount) => prevCount-1)}> - </button>
  
    <h1> {counter} </h1>
    <button onClick={() => setCounter((prevCount) => prevCount+1)}> + </button>
              
    </div>
  );
}

export default App;
