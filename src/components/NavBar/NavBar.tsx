import { NavLink } from 'react-router-dom'
import { navbarLinks } from 'src/data/navbarLinks'
import menuImg from '../../assets/icons/ic_home.svg'
import './NavBar.scss'

const NavBar = () => {
  
  return (
    <nav className="navbar">
      <h1 className='navbar__logo'>
        Recipe<span>App</span>
      </h1>

      <button className="navbar__hamburger">
        <img src={menuImg} className="navbar__img-hambuger" alt='menu' />
      </button>
      
      <ul className='navbar__list-menu' >
        {
          navbarLinks.map( (item, i) => (
          <li>
            <NavLink  
              to={item.to}
              className={({isActive}) => isActive ? 'navbar__item-active': 'navbar__item' }
            >{item.label}</NavLink>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default NavBar