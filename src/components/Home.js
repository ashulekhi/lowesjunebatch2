import Admin from "./Admin";
import Cake from "./Cake";
import Cakelist from "./Cakelist";
import Carousel from "./Carousel";
import Meeting from "./Meeting";
import Navbar from "./Navbar";
import User from "./User";
import Userlist from "./Userlist";

export default function Home() {
    var cake1 = {
        name:"Choco Truffle",
        image:"chocotruffle.jpg",
        price:350,
        eggless:true
    }
    return (
        <div>
            <Navbar />
            <Carousel />
            <Admin />
            <Meeting />
        </div>
    )
}