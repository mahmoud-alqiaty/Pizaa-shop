import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Nav = styled.nav `
    width: 100%;
    height: 70px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

`

export const NavLogo = styled(Link) `
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    font-family: 'Karantina', cursive;
`

export const ManuIcon = styled.div `
    text-transform: capitalize;
    color: #fff;
    font-weight: 600;
    cursor: pointer;

    span {
        display: inline-block;
        margin-right: 10px;
    }
`