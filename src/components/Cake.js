export default function Cake(){
    var data = {
        image:"chocotruffle.jpg",
        price:765,
        name:"Chocolate Truffle"
    }
    return (
        <div class="card" style={{width: "18rem"}}>
  <img src={data.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{data.name}</h5>
    <p class="card-text">{data.price}</p>
  </div>
</div>
    )
}