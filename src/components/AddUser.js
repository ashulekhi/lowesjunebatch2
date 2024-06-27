import { useEffect, useState } from "react"

export default function AddUser(props) {
    console.log("props" , props)
    var [user,setUser] = useState({})

    useEffect(function(){
        setUser(props.user || {})
    },[props])
  
    function handleGender(e){
        setUser({
            ...user,
            gender:e.target.value
        })
    }
    function handleName(e){
        setUser({
            ...user,
            name:e.target.value
        })
    }

    function addUser(){
        props.addUser(user)
        setUser({
            name:"",
            gender:""
        })
    }
    return (
        <div>
            <div>
                <h1>Add User</h1>
                <div>
                    <label>Name</label>
                    <input value={user.name} onChange={handleName} className="form-control" />
                </div>
                <div>
                    <select value={user.gender} onChange={handleGender}>
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-primary mb-5" onClick={addUser}>Add User</button>
                </div>
            </div>
        </div>
    )
}