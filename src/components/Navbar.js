export default function Navbar(){
  var projectName = "Lowe's Cake Cafe"
  var isloggedin = true
   return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{projectName}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
       
       
      </ul>
      <form class="d-flex" role="search">
      {isloggedin==false &&  <button class="btn btn-primary" type="button">Login</button>}
        {isloggedin==true && <button class="btn btn-danger" type="button">Logout</button>}
      </form>
    </div>
  </div>
</nav>
   )
}