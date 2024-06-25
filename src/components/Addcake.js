import React, { useState } from "react"
import Cake from "./Cake"
export default function AddCake(){
    var cake = {}
    var inputreference = React.createRef()
    var [allcakes,setAllcakes] = useState([])
    function handleName(e){
        cake.name = e.target.value
    }
    function handlePrice(e){
        cake.price = e.target.value
    }

    function deleteCake(){
        var inputelement = inputreference.current
        console.log("tbis cake needs to be deleted" , inputelement.value)
    }

    function addCake(){
        console.log("TRhis cake need to be added" , cake)
        allcakes.push({...cake})
        setAllcakes([...allcakes])
        // allcakes = [...allcakes , cake]
        // add it into a list 
        // print that list of cakes added into console
    }
    return (
        <div className="container">
            <div>
                <h1>Add New Cake</h1>
                <input ref={inputreference} type="number" id="deleteinput"></input>
                <button onClick={deleteCake}>Delete</button>
                <div>
                    <label>Name</label>
                    <input onChange={handleName} className="form-control"></input>
                </div>

                <div>
                    <label>Price</label>
                    <input onChange={handlePrice} className="form-control"></input>
                </div>
                <div>
                    <button onClick={addCake} className="btn btn-primary">Add Cake</button>
                </div>
            </div>

            {
                allcakes.map(function(each){
                    return <Cake data={each} />
                })
            }
        </div>
    )
}