import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar(){
  var projectName = "Lowe's Cake Cafe"
  var isloggedin = useSelector(function(state){return state.AuthReducer.isloggedin})
  var navigate = useNavigate()
  var searchtext
  function handleText(e){
     searchtext = e.target.value
  }

  function searchCakes(){
    navigate("/search?q="+searchtext)
  }
   return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">{projectName}</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      <form class="d-flex" role="search">
        <input onChange={handleText} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={searchCakes} class="btn btn-outline-success" type="button">Search</button>
      </form>
       
       
      </ul>
      <form class="d-flex" role="search">
      {isloggedin==false &&  <Link to="/login"><button class="btn btn-primary" type="button">Login</button></Link>}
        {isloggedin==true && <Link to="/admin"> <button class="btn btn-warning" type="button">Admin Panel</button> </Link>}
        {isloggedin==true && <button class="btn btn-danger" type="button">Logout</button>}
      </form>
    </div>
  </div>
</nav>
   )
}