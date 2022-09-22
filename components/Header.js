import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="./" class="nav-link">Home</Link> &nbsp;&nbsp;
                </li>
        <li class="nav-item">
        <Link to="./printers" class="nav-link">All Printer</Link> &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to="/printer" class="nav-link">Add Printer </Link>&nbsp;&nbsp;
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </div>
 
</nav>



      
    </>
  );
}

export default Header;

