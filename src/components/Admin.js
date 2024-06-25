import NewUserList from "./NewUserlist";
var userdata = [
    {name:"Ashu", gender:"male"},
    {name:"Soujanya", gender:"female"},
]
export default function Admin(){
    return (
        <NewUserList list={userdata} mode="ADMIN" />
    )
}