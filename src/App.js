import './App.css';

const App = () => {
  // inserted real javascript code
  const name = 'Michael';
  const isNameShowing = false;
  return (
    <div className="App">
    <h1> Hello, {isNameShowing ? name : 'someone' }! </h1>
     
    </div>
  );
}

export default App;
