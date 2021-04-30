// {ProductsContainer, ProductsWrapper, ProductItem, ProductInfo, ProductBtn}

import styled from "styled-components";
import {Btn} from '../HeroSection/HeroStyles'

export const ProductsContainer = styled.div `
    width: 100%;
    min-height: 100vh;
    background-color: #101313;
    padding: 70px 0;

    h1{
        color: #fff;
        font-size: clamp(32px, 10vw, 50px);
        text-transform: uppercase;
        text-align: center;
        font-family: 'Antonio', sans-serif;
        margin-bottom: 15px;
    }

    
`
export const ProductsWrapper = styled.div `
    width: 100%;
    height: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Antonio', sans-serif;

    @media screen and (max-width: 650px){
        justify-content: center;
        padding: 50px 20px;
    }

`
export const ProductItem = styled.div `
    width: 30%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

    img{
        display: block;
        width: 100%;
        height: 250px;
        box-shadow: 8px 6px yellowgreen;
        object-fit: cover;
    }

    @media screen and (max-width: 992px){
        width: 32%;
    }
    @media screen and (max-width: 650px){
        width: 50%;
        padding: 0 15px;
        margin-bottom: 45px;
    }
    @media screen and (max-width: 405px){
        width: 100%
    }
`

export const ProductInfo = styled.div `
    margin: 15px 0;
    text-align: center;
    color: #fff;
    max-width: 250px;

    h3{
        font-size: 20px;
        text-transform: capitalize;
        margin: 15px 0;
    }

    p{
        line-height: 1.5;
        font-size: 16px;
    }

    p.price{
        font-size: 20px;
    }
`

export const ProductBtn = styled(Btn) `
    width: 160px;

    @media screen and (max-width: 650px){
        margin-top: 0px;
    }
`