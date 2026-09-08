import { NavLink } from 'react-router-dom'
import SiliconLogo from '../assets/images/logos/silicon-logo.svg'

const UserIcon = ({ size = 24 }: { size?: number } = {}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
    )
}

const Nav = () => {
  return (
    <div>
        <nav className='container flex justify-between items-center py-4'>
            {/* Left Navigation Area w/ Logo */}
            <div className='flex gap-8 items-center'>
                <NavLink className='flex items-center gap-2 pr-6 logo-text xl-text' to='/'>
                    <img src={SiliconLogo} alt="Silicon" className='w-10' />
                    Silicon
                </NavLink>
                <NavLink className='nav-text' to='/'>Features</NavLink>
                <NavLink className='nav-text' to='/contact-us'>Contact</NavLink>
            </div>

            {/* Right Navigation Area */}
            <div className='flex gap-8 items-center'>
                {/* TO-DO: Implement dark mode toggle */}
                <div className='flex items-center gap-3'>
                    <p className='md-text text-gray-700 font-medium'>Dark Mode</p>
                    <button
                        type='button'
                        role='switch'
                        aria-checked='false'
                        aria-label='Toggle dark mode'
                        className='w-9 h-5 shrink-0 rounded-full bg-gray-600 flex items-center px-0.5'
                    >
                        <span className='w-4 h-4 rounded-full bg-white shadow-md' />
                    </button>
                </div>
                <button className='btn-sm hover:cursor-pointer gap-2'>
                    <UserIcon size={18} />
                    Sign in / up
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Nav
