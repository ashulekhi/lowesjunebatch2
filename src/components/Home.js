import AddCake from "./Addcake";
import Cake from "./Cake";
import Cakelist from "./Cakelist";
import Carousel from "./Carousel";
import Meeting from "./Meeting";
import Navbar from "./Navbar";
import User from "./User";
import Userlist from "./Userlist";

export default function Home(props) {
    var cake1 = {
        name:"Choco Truffle",
        image:"chocotruffle.jpg",
        price:350,
        eggless:true
    }
    return (
        <>
        <Carousel />
        <div className="container-fluid">
            
            <Cakelist />
         </div>
        </>
       
    )
}