import { Link } from "react-router-dom"

//Styles
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to={"/"}  className="brand">
                <h2>Lenny's CookBook</h2>
            </Link>

            <Link to={"/create"}> Create recipe</Link>
        </nav>
    </div>
  )
}
