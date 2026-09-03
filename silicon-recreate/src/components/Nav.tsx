import { NavLink } from 'react-router-dom'
import SiliconLogo from '../assets/images/logos/silicon-logo.svg'

const Nav = () => {
  return (
    <div>
        <nav className='container flex justify-between py-4'>
            {/* Left Navigation Area w/ Logo */}
            <div className='flex gap-5 items-center'>
                <NavLink className='flex items-center gap-2 pr-6 logo-text xl-text' to='/'>
                    <img src={SiliconLogo} alt="Silicon" />
                    Silicon
                </NavLink>
                <NavLink className='nav-text' to='/'>Features</NavLink>
                <NavLink className='nav-text' to='/contact-us'>Contact</NavLink>
            </div>

            {/* Right Navigation Area */}
            <div className='flex gap-5 items-center'>
                {/* TO-DO: Implement dark mode toggle */}
                <p>Dark Mode</p>
                <button className='btn-sm'>Sign in/up</button>
            </div>
        </nav>
    </div>
  )
}

export default Nav
