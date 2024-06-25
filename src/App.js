import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Meetroom from './components/Meetroom';
import Cakelist from './components/Cakelist';
import AddCake from './components/Addcake';

function App() {

  function stopCopying(){
    alert("Ae Theif")
  }

  return (
    <div  className="App">
      <AddCake />
      {/* <Meetroom /> */}
       {/* <Home stopCopying={stopCopying} message="hey how are u?" /> */}
    </div>
  );
}

export default App;
