import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a test header</h1>
      </header>
      <body>
        This is a test body
      </body>
      <button onClick={runTestButton} className='testButton'>CLICK ME!!!!</button>
    </div>
  );
}

function runTestButton(){
  alert("HELLO");
};

export default App;
