import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCake from './components/Addcake';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import Cart from './components/Cart';
import Pagenotfound from './components/Pagenotfound';
import Forgot from './components/Forgot';
import Navbar from './components/Navbar';
import Admin from './components/Admin';


function App() {
  return (
    <div  className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/"  element={ <Home />  }/>
        <Route  path="/admin"  element={ <Admin />  }/>
        <Route  path="/login"  element={ <Login />  }/>
        <Route  path="/register"  element={ <Signup />  }/>
        <Route  path="/forgot"  element={ <Forgot />  }/>
        <Route  path="/search"  element={ <Search />  }/>
        <Route  path="/cart"  element={ <Cart />  }/>
        <Route  path="/addcake"  element={ <AddCake />  }/>
        <Route  path="/*"  element={ <Pagenotfound />  }/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
