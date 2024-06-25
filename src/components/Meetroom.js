import {useState} from "react"
export default function Meetroom(){
    
    var [salary,Manager] =  useState()
    var [users,setUsers] =  useState(0)

    function attendTrainingReact(){
        Manager(salary+100)
        setUsers(users+1)
    }

    return (
        <div>
            <h1>People Joined : {users}</h1>
            <button onClick={attendTrainingReact}>Join Meeting</button>
        </div>
    )
}