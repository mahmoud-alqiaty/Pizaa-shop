import React, { useContext } from 'react'
import {GiHamburger} from 'react-icons/gi'
import {menuOpenContext} from '../../App'
import {Nav, NavLogo, ManuIcon} from './NavbarStyles'


const Navbar = () => {
    const data =  useContext(menuOpenContext) 
    
    return (
        <Nav>
            <NavLogo to="/">
                pizza
            </NavLogo>
            <ManuIcon onClick={data.openMenu}>
                <span>menu</span> 
                <GiHamburger />
            </ManuIcon>
        </Nav>
    )
}

export default Navbar
