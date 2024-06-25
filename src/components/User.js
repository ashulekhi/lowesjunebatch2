export default function User({name,gender}){
    return (
        <div className="card" style={{width:"15rem"}}>
            {gender=="male" && <img  src="usericon2.png"></img>}
            {gender=="female" && <img  src="femaleicon.png"></img>}
            <label><h1>{name}</h1></label>
        </div>
    )
}

// <User name="Value of username"  />
// Based on the condiiton show different image 


// conditional rendering 
