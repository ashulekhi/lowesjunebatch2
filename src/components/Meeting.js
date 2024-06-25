import NewUserList from "./NewUserlist"

export default function Meeting(){
    var userdata = [
        {name:"Ashu", gender:"male"},
        {name:"Soujanya", gender:"female"},
    ]
    return (
        <NewUserList list={userdata} mode="MEETING" />
    )
}