import { useParams } from "react-router-dom";

import { styled } from "styled-components";
import { Title } from "../title/title";
import { BeansLineDark } from "../beans-line/beans-line";

import data from "../../helpers/coffee-data";

const AboutItStyle = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 30px;
    h2 {
        margin-bottom: 20px;
    }
    div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        flex: 1;
        img {
            max-width: 390px;
            height: 100%;
        }
        div {
            width: 100%;
            flex-direction: row;
            margin-bottom: 15px;
            img {
                max-width: 200px;
            }
            p {
                width: 100%;
                font-size: 14px;
                color: #000;
                font-weight: bold;
                text-align: left;   
            }
            span {
                font-size: 14px;
                color: #000;
                margin-left: 5px;
            }
            .price {
                font-size: 24px;
            }
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        div {
            img {
                width: 100%;
                max-width: 100%;
            }
        }
    }
`

function AboutIt(props) {
    const { id } = useParams();
    const element = data.find(item => item.id.toString() === id.toString());

    const {name, description, country, price, photo} = element
    return ( 
        <AboutItStyle>
            <div>
                <img src={photo} alt="img" />
            </div>
            <div>
                <Title>{name}</Title>
                <BeansLineDark/>
                <div>
                    <p>Country:
                        <span>{country}</span>
                    </p>
                </div>

                <div>
                    <p>Description:
                        <span>{description}</span>
                    </p>
                </div>

                <div>
                    <p>Price:
                        <span className="price">{price}$</span>
                    </p>
                </div>
            </div>
        </AboutItStyle>
     );
}

export default AboutIt;