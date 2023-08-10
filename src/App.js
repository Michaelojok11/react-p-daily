import './App.css';
// react components

const Person = () => {
  return (
    <> 
    <h1>  Name: Michael </h1>
    <h2> Last Name: Ojok </h2>
    <h2> Age: 27 </h2>
    </>  
  )
}


const App = () => { 
  return (
    <div className="App">
    <Person />
    <Person />
    <Person />
    <Person />
    <Person />
   
    </div>
  );
}

export default App;
