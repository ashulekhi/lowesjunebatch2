export default function Cake(props) {
  var label 
  console.log("props" , props)
  if(props.data.eggless){
    label = <label className="alert alert-success">Eggless</label>
  }
  function removeItem(){
    props.removeCake(props.data.name)
  }
  return (
    <div class="card m-3" style={{ width: "20rem" }}>
      <button onClick={removeItem} className="btn btn-danger">X</button>
      <img style={{height:"18rem"}} src={props.data?.image} />
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