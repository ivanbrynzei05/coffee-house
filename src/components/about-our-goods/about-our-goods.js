import { styled } from "styled-components";
import { ContainerLarge } from "../container/container";
import { Title } from "../title/title";
import { BeansLineDark } from "../beans-line/beans-line";

import Img from '../../images/about-our-beans.jpg'


const AboutOurGoodsStyles = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 70px;
    position: relative;
    margin-bottom: 60px;
    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 30px;
        padding-bottom: 60px;
        img {
            width: 270px;
        }
        p {
            font-size: 14px;
            max-width: 346px;
            text-align: center;
            margin-bottom: 20px;
        }
        div {
            margin-bottom: 25px;
        }
        h2 {
            margin-bottom: 20px;
        }
    }
    &::before {
        content: '';
        width: 240px;
        height: 1px;
        background-color: #000;
        position: absolute;
        bottom: 0;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        &::before {
            left: 50%;
            transform: translateX(-50%);
    }
}

`
function AboutOurGoods() {
    return ( 
        <ContainerLarge>
            <AboutOurGoodsStyles>
                <div>
                    <img src={Img} alt="" />
                </div>
                <div>
                    <Title>About our goods</Title>
                    <BeansLineDark/>
                    <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.On disposal of as landlord horrible.
                    </p>
                    <p>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </AboutOurGoodsStyles> 
        </ContainerLarge>

    );
}

export default AboutOurGoods;