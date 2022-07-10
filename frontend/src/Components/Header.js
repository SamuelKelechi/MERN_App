import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../index.css'

function Header() {
  return (
    <header className='Header'>
        <div className='HeaderWrap'>
            <div className='Logo'> 
                <Link to='/' className='Link'>LOGO</Link>
            </div>

            <ul>
                <li>
                    <Link to='/login' className='Link'>
                        <FaSignInAlt />Login
                    </Link>
                </li>
                <li>
                    <Link to='/register' className='Link'>
                        <FaUser />Register
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header