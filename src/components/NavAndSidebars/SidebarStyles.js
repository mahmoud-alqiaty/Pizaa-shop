import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Btn} from '../HeroSection/HeroStyles'

export const SidebarContainer = styled.div `
    position: fixed;
    top: 0;
    right:${({isMenuOpen})=> isMenuOpen? '0' : '-100%'};
    width: 350px;
    height: 100vh;
    z-index: 1000;
    background-color: yellowgreen;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    grid-auto-rows: 80px;
    align-items: center;
    justify-content: center;
    text-align:center;
    padding: 0 20px;
    transition: 0.3s ease-out;
`

export const ClosingIcon = styled(FaTimes)`
    justify-self: end;
    font-size: 32px;
    cursor: pointer;
`

export const SidebarItem = styled(Link) `
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 24px;
    text-transform: capitalize;

    &:hover{
        color: rgb(123, 85, 40);
    }
`

export const SidebarBtn = styled(Btn)`
    justify-self: center;
    width: 250px;
    margin-top: 200px;
`
