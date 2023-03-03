import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="navbar">
          <Link to='/'><h1>DF News</h1></Link>
          <div className="links">
              <Link to='/'><button>Home</button></Link>
          </div>
      </nav>
  )
}

export default Navbar;