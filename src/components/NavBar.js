import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="nav--bar">
            <h1 className="nav--title">Modern Mom's</h1>
            <div className="nav--links">
                <Link to="/" className="nav--name">Home</Link>
                <Link to="/childcare" className="nav--name">Kids Events</Link>
                <Link to="/workout" className="nav--name">Mom Fit Classes</Link>
                <Link to="/community" className="nav--name">Community Board</Link>
            </div>
        </nav>
    )
}

export default NavBar;