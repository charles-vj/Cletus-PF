import React from 'react'
import styled, { css } from 'styled-components'
import bg from '../images/bg.jpg'
import ParticlesBg from 'particles-bg'

const HeroSection =styled.section`
    height : 100vh;
    max-height : 1100px;
    position : relative;
    overflow : hidden;
    background : transparent;
`;

const HeroWrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content: center;
    align-items : center;
    overflow : hidden;
    position : relative;

`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <ParticlesBg type="cobweb" color="#90F75C" bg={true} />
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
