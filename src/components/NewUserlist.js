import User from "./User"

export default function NewUserList({ list, mode , removeUser , updateUser }) {
    function deleteUser(index){
        removeUser(index)
    }

    function editUser(index){
        debugger
        updateUser(index)
    }
    if (mode == "ADMIN") {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {list.map((function (each , index) {
                            return (
                                <tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{each.name}</td>
                                    {each.gender == "female" && <td><img style={{ height: "4rem" }} src="femaleicon.png"></img></td>}
                                    {each.gender == "male" && <td><img style={{ height: "4rem" }} src="usericon2.png"></img></td>}
                                    <td><button onClick={deleteUser.bind(null,index)} className="btn btn-danger">X</button></td>
                                    <td><button onClick={editUser.bind(null,index)} className="btn btn-primary">Edit</button></td>
                                </tr>
                            )
                        }))}


                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <div className="row">
                {list.map(function (each) {
                    return <User name={each.name} gender={each.gender} />
                })}
            </div>
        )
    }
}