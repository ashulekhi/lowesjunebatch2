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
import UserTable from './components/Usertable';
import AddUser from './components/AddUser';
import Cakedetails from './components/Cakedetails';
import React from 'react';
import Checkout from './components/Checkout';
import AddAddress from './components/Addaddress';
import Paymentmode from './components/Paymentmode';
import CheckoutSummary from './components/CheckoutSummary';
import Myorders from './components/Myorders';

var Admin = React.lazy(()=>import("./components/Admin"))

export var NetWorth = React.createContext()
function App() {
  var username = "Ashu Lekhi"
  const sampleData = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Alice Johnson', age: 35, email: 'alice@example.com' }
  ];
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NetWorth.Provider value="300 million dollars">< Home /></NetWorth.Provider>} />


         <Route path="/admin" element={<React.Suspense fallback={<div>Loading...</div>}><Admin /></React.Suspense> } >
            <Route path="allusers" element={<UserTable data={sampleData} />} />
            <Route path="adduser" element={<AddUser />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/myorders" element={<Myorders />} />
          <Route path="/search" element={<Search />} />
         {localStorage.token && <Route path="/cart/*" element={<Cart />} /> }
          <Route path="/details/:cakeid" element={<Cakedetails />} />
          <Route path="/addcake" element={<AddCake />} />
          <Route path="/*" element={<Pagenotfound />} />
          <Route path="/checkout" element={<Checkout />}>
              <Route path="" element={<AddAddress />} />
              <Route path="addaddress" element={<AddAddress />} />
              <Route path="paymentmode" element={<Paymentmode />} />
              <Route path="checkoutsummary" element={<CheckoutSummary />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
