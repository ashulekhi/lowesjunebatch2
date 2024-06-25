import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"

function App() {
  function stopCopying(){
    alert("Ae Theif")
  }
  return (
    <div  onCopy={stopCopying} className="App">
       <Home />
    </div>
  );
}

export default App;
