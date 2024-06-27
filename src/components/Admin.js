import { useState } from "react";
import AddUser from "./AddUser";
import NewUserList from "./NewUserlist";
import UserTable from "./Usertable";

export default function Admin(){
var [userdata,setUserdata] = useState([])
const sampleData = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { name: 'Alice Johnson', age: 35, email: 'alice@example.com' }
  ];
var [user,setUser] = useState({})
  function addUser(user){
    console.log("user added by add user component" , user)
    userdata=[...userdata,{...user}]
    setUserdata(userdata)
    setUser({})
  }

  function removeUser(index){
        userdata.splice(index,1)
        setUserdata([...userdata])
  }
  function updateUser(index){
    console.log(">>>>>>>>>>>>" , userdata[index] )
    setUser({...userdata[index]})
}
    return (
        <div>
                <h1>Admin Panel</h1>
        </div>
    )
}