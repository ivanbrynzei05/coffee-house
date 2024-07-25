import { styled } from "styled-components";
import { BeansLineDark } from "../beans-line/beans-line";
import { ContainerLarge } from "../container/container";
import { Title } from "../title/title";

const AboutUsStyle = styled.section`
    text-align: center;
    padding-top: 80px;
    padding-bottom: 100px;
    h2 {
        margin-bottom: 20px;
    }
    img {
        margin-bottom: 40px;
    }
    p {
        margin-bottom: 20px;
    }

`

function AboutUs() {
    return ( 
        <ContainerLarge>
            <AboutUsStyle>
                <Title>About Us</Title>
                <BeansLineDark/>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </p>
                <p>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                </p>
            </AboutUsStyle>
        </ContainerLarge>
     );
}

export default AboutUs;