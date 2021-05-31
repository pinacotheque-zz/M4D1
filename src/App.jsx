import logo from './logo.svg';
import './App.css';
// import FirstComponent from './FirstComponent'
import FirstClassComponent from './FirstClassComponent'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
        
        {/* PROPS */}
        {/* <FirstComponent titleText = "first"/> */}
        {<FirstClassComponent myClass="text-red" />}

        <Counter/>
      </header>
    </div>
  );
}

export default App;
