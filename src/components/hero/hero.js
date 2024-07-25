import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { ContainerLarge } from "../container/container";
import { BeansLine } from "../beans-line/beans-line";

import HeroImgSrc from '../../images/hero.jpg'

const HeroWrapper =  styled.section`
    width: 100%;
    height: 640px;
    background-image: url(${HeroImgSrc});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
    padding-top: 180px;
    img {
        width: 200px;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    h1 {
        margin-bottom: 20px;
        font-size: 40px;
        font-weight: bold;
    }
    h2 {
        margin-bottom: 20px;
        font-weight: bold;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        background-color: inherit;
        color: inherit;
        font-size: 14px;
        width: 120px;
        height: 30px;
        border: 1px solid #fff;
        border-radius: 3px;
        margin: auto;

    }
`

const Hero = () => {
    return (
        <HeroWrapper>
            <ContainerLarge>
                <h1>Everything You Love About Coffee</h1>
                <BeansLine/>
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <NavLink to="/our-coffee">More</NavLink>
            </ContainerLarge>
        </HeroWrapper>
    )
}

export default Hero;