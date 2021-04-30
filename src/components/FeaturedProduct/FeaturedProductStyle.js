import styled from 'styled-components'
import featuredProductImg from '../../images/FeaturedProduct.jpg'
import { Btn } from '../HeroSection/HeroStyles'


export const FeaturedProductContainer = styled.div `
    width: 100%;
    height: 70vh;
    min-height: 400px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${featuredProductImg});
    background-size: cover;
    background-position: center;

`
export const FeaturedProductContents = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        text-transform: capitalize;
        font-size: clamp(30px, 10vw, 80px);
        color: #fff;
        font-family: 'Karantina', cursive;
    }

    p{
        color: #fff;
        margin: 10px auto;
        font-size: 16px;
    }
`

export const FeaturedProductBtn = styled(Btn) `
    background-color: yellowgreen;
    color: #000;
    text-transform: capitalize;
`