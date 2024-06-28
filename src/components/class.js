class Employee {

    name
    getSalary(){
        setTimeout(()=>{
            console.log("this" , this)

         },5000)
    }
}

var E1 = new Employee()
var E2 = new Employee()

E1.name = "Ashu"
E2.name = "Ashu Lekhi"

E1.getSalary()
E2.getSalary()