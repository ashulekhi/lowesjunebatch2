import User from "./User"
export default function Userlist(){
   var users = ["Ashu" , "Mayur" , "Soujanya" , "Pranav" , "Aditya"]
var newusers = [{
    name:"Ashu",
    gender:"male"
} , 
{
    name:"Soujanya",
    gender:"female"
}]
return (
    <div>
        {newusers.map(function(each){
       return  <User name={each.name} gender={each.gender} />

        })}
    </div>
)
//    return (
//     <div>
//         <div className="alert alert-warning">{users[0]}</div>
//         <div className="alert alert-warning">{users[1]}</div>
//         <div className="alert alert-warning">{users[2]}</div>
//         <div className="alert alert-warning">{users[3]}</div>
//         <div className="alert alert-warning">{users[4]}</div>
//     </div>
//    )
   return (
    <div>
        {
        users.map(function(each){
            return <div className="alert alert-info">{each}</div>
        })
        }
    </div>
   )
}