
import { NavMenu, NavLink } from "../pages/Home/NavbarElements";
import Speech from "../pages/Home/Speech";

const Footer = () => {
    
    return(
        <div id="footer">
            <Speech />
            <NavMenu>
          <NavLink to='/home' className='home'>
            Home
          </NavLink>
          <NavLink to='/FavoritesPage' className='favorites'>
            Favorites
          </NavLink>
          <NavLink to='/weekly' className='weekly'>
            Weekly
          </NavLink>
          <NavLink to='/monthly' className='monthly'>
            Monthly
          </NavLink>
        </NavMenu>    
        </div>

    )
}

export default Footer;