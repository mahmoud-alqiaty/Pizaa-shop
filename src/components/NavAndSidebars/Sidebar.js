import React, { useContext } from 'react'
import {SidebarContainer, ClosingIcon, SidebarItem, SidebarBtn} from './SidebarStyles'
import {menuOpenContext} from '../../App'




const Sidebar = () => {
    const data =  useContext(menuOpenContext) 
    return (
        <SidebarContainer isMenuOpen={data.isMenuOpen}>
            <ClosingIcon onClick={data.closeMenu}/>
            <SidebarItem to="/pizzas" onClick={data.closeMenu}>pizzas</SidebarItem>
            <SidebarItem to="/dessert" onClick={data.closeMenu}>desserts</SidebarItem>
            <SidebarItem to="/full-me" onClick={data.closeMenu}>full menu</SidebarItem>
            <SidebarBtn onClick={data.closeMenu}>order now</SidebarBtn>
        </SidebarContainer>
    )
}

export default Sidebar
