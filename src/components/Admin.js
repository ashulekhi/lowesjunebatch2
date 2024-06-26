import { useState } from "react";
import AddUser from "./AddUser";
import NewUserList from "./NewUserlist";

export default function Admin(){
var [userdata,setUserdata] = useState([])
  function addUser(user){
    console.log("user added by add user component" , user)
    userdata=[...userdata,{...user}]
    setUserdata(userdata)
  }

  function removeUser(index){
        userdata.splice(index,1)
        setUserdata([...userdata])
  }
    return (
        <div>
            <AddUser addUser={addUser} />
        <NewUserList removeUser={removeUser} list={userdata} mode="ADMIN" />
        </div>
    )
}