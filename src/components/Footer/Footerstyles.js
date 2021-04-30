
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLogo } from "../NavAndSidebars/NavbarStyles";

export const FooterContainer = styled.div `
    width: 100%;
    height: 70px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;

    @media screen and (max-width: 405px){
        padding: 10px 20px;
    }
`

export const FooterLogo = styled(NavLogo) ``

export const FooterSocials = styled.div `
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 40px;
    grid-column-gap: 5px;

    @media screen and (max-width: 405px){
        grid-auto-columns: 30px;
    }
`
export const FooterSocialsLink = styled(Link) `
    color: #fff;
    font-size: 18px;
`