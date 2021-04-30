import React from 'react'
import {HeroContainer, HeroContents, Btn} from './HeroStyles'

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroContents>
                    <h1>greatest <br/> pizza ever</h1>
                    <p>ready in 8 minutes</p>
                    <Btn>order now</Btn>
                </HeroContents>
            </HeroContainer>
        </>
    )
}

export default Hero
