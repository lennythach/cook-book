import { Link } from "react-router-dom"
import { useTheme } from '../hooks/useTheme'
//Styles
import "./Navbar.css"

//components
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color } = useTheme()


  return (
    <div className="navbar" style={{ background: color }}>
        <nav>
            <Link to="/"  className="brand">
                <h2>Lenny's CookBook</h2>
            </Link>
            <Searchbar />
            <Link to="/create"> Create recipe</Link>
        </nav>
    </div>
  )
}





