import { useContext } from "react"
import { Link } from "react-router-dom"
import { NetWorth } from "../App"

export default function Cake(props) {
  var paisa = useContext(NetWorth)
  console.log("paisa , paisa" , paisa)
  var label 
  console.log("props" , props)
  if(props.data.eggless){
    label = <label className="alert alert-success">Eggless</label>
  }
  function removeItem(){
    props.removeCake(props.data.name)
  }
  return (
    <div class="card m-3" style={{ width: "23rem" }}>
      {paisa}
      {/* <button onClick={removeItem} className="btn btn-danger">X</button> */}
     <Link to={"/details/"+props.data.cakeid}> <img style={{height:"16rem"}} src={props.data?.image} /></Link>
      <div class="card-body">
        <h5 class="card-title">{props.data?.name}</h5>
        <p class="card-text">{props.data?.price}</p>
        {label}
      </div>
    </div>
  )
}

// export default function Cake({data}) {
//   console.log("props" , props)
//   return (
//     <div class="card" style={{ width: "18rem" }}>
//       <img src={data?.image} class="card-img-top" alt="..." />
//       <div class="card-body">
//         <h5 class="card-title">{data?.name}</h5>
//         <p class="card-text">{data?.price}</p>
//       </div>
//     </div>
//   )
// }

// Example of usage 
// <Cake name="Truffle White"  price="564" image="whitetruffle.jpeg" >
// <Cake data={cakeobject} />