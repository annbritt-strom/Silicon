import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
        <nav className='container flex justify-between'>
            {/* Left Navigation Area w/ Logo */}
            <div>
                <NavLink to="/">Silicon</NavLink>
                <NavLink to="/">Features</NavLink>
                <NavLink to="/contact-us">Contact</NavLink>
            </div>

            {/* Right Navigation Area */}
            <div>
                <p>Dark Mode</p>
                <button>Sign in/up</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav
