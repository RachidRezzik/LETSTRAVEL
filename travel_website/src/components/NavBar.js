import React, {useState} from 'react'
import {
    Link
} from 'react-router-dom'
import x_mark from '../images/x_mark.png'
import hamburger from '../images/hamburger.png'
import dropdown_arrow from '../images/dropdown_arrow.png'
import airplane from '../images/airplane.png'
import useCurrentWidth from './useCurrentWidth'


function NavBar() {
    const [click, setClick] = useState(false)
    const [click_2, setClick_2] = useState(false)
    const current_width = useCurrentWidth()
    const handleClick = () => {
        setClick(!click)
        setClick_2(false)
    }
    const handleClick2 = () => setClick_2(!click_2)
    const closeMobileMenu = () => {
        if (current_width >= 650){
            setClick_2(false)
        }
        setClick(false)
    }
    const [isMobile, setMobile] = useState((window.innerWidth >= 650) ? false : true)

    const handleResize = (current_width, isMobile) => {
        if(isMobile === true && current_width >= 650){
            setMobile(false)
            setClick(false)
            setClick_2(false)
            console.log("Mobile to Desktop")
        } 
        else if (isMobile === false && current_width < 650){
            setMobile(true)
            setClick(false)
            setClick_2(false)
            console.log("Desktop to Mobile")
        }
    }

    handleResize(useCurrentWidth(), isMobile)
    
    

    
    return (
        <>
            <nav id="navbar" className="navbar">
                <div className="logo_container" onClick={closeMobileMenu}>
                    <Link to="/" className="navbar_logo">
                        <span>LETS</span>TRAVEL
                        <img id="airplane" src={airplane} alt="" />
                    </Link>

                </div>
                <div className="menu_icon" onClick={handleClick}>
                    <img src={click ? `${x_mark}` : `${hamburger}`} alt="" />
                </div>
                <div className={click ? 'menu_container_active' : 'menu_container'}>
                    <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                        <li className="nav_item">
                            <Link to="/" className="nav_links" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/Africa" className="nav_links" onClick={closeMobileMenu}>Africa</Link>
                        </li>
                        <li className="americas_link" onClick={handleClick2}>
                            <div className="americas_highlight">
                                <img id="dropdown_arrow" src={dropdown_arrow} alt="" />
                                <a className="dropdown_link">Americas</a>
                            </div>
                            <ul className={click_2 ? 'americas_active' : 'americas'}>
                                <li>
                                    <Link to="/NorthAmerica" className="nav_links" onClick={closeMobileMenu}>North America</Link>
                                </li>
                                <li>
                                    <Link to="/SouthAmerica" className="nav_links" onClick={closeMobileMenu}>South America</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav_item">
                            <Link to="/Asia" className="nav_links" onClick={closeMobileMenu}>Asia</Link>
                        </li>
                        <li className="nav_item">
                            <Link to="/Europe" className="nav_links" onClick={closeMobileMenu}>Europe</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
