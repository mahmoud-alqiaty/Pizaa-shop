import styled from 'styled-components'
import myImage from "../../images/heroBg2.jpg"

export const HeroContainer = styled.div `
    width: 100%;
    height: 100vh;
    background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${myImage});
    background-size: cover;
    background-position: center;
    padding: 100px;

    @media screen and (max-width: 650px){
        padding: 100px 50px;
    }
`

export const HeroContents = styled.div `
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    font-family: 'Zen Dots', cursive;
    color: #fff;

    h1{
        font-family: 'Antonio', sans-serif;
        font-size:  80px;
        text-transform: uppercase;
        letter-spacing: 3px;
        line-height: 1;
        box-shadow: 3px 5px yellowgreen;
        margin-bottom: 10px;
        padding-bottom: 5px;
    }

    p{
        font-size: 32px;
        font-weight: bold;
        text-transform: uppercase;
        font-family: cursive;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
    @media screen and (max-width: 550px){
        h1{
            font-size: 50px;
        }
    }
`
export const Btn = styled.button`
    width: 150px;
    padding: 15px 25px;
    margin-top: 30px;
    cursor: pointer;
    color: #fff;
    background-color: rgb(123, 85, 40);
    border: none;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 18px;

    &:hover{
        background-color: rgb(105, 50, 49);
        box-shadow: 0 5px 10px #000;
    }
`