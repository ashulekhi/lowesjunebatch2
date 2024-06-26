export default function AddUser(props) {
    var user = {}
    function handleGender(e){
        console.log(",,,," , e.target.value)
        user.gender = e.target.value
    }
    function handleName(e){
        user.name = e.target.value
    }

    function addUser(){
        props.addUser(user)
    }
    return (
        <div>
            <div>
                <h1>Add User</h1>
                <div>
                    <label>Name</label>
                    <input onChange={handleName} className="form-control" />
                </div>
                <div>
                    <select onChange={handleGender}>
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