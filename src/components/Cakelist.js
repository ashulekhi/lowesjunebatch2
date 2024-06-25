import Cake from "./Cake"

export default function Cakelist() {
    var cakes = [{
        name: "BlueBerry Cheese",
        price: 900,
        image: "blueberry.jpeg"
    }, {
        name: "Heavenly Red Velvet Cheese",
        price: 1300,
        image: "redvelvet.webp"
    }, {
        name: "Blue Chocolate Pinata Cake",
        price: 1900,
        image: "bluepinata.webp"
    }, {
        name: "Choco Truffle",
        image: "chocotruffle.jpg",
        price: 350,
        eggless: true
    }]

    function removeCake(name) {
        alert(name)
    }

    return (
        <div className="row m-2">
            {cakes.map(function (each) {
                return <Cake removeCake={removeCake} data={each} />
            })}
        </div>
    )
}