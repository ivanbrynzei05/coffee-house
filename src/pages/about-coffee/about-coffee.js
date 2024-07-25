
import AboutIt from "../../components/about-it/about-it";
import Banner from "../../components/banner/banner";
import { ContainerLarge } from "../../components/container/container";

import banerBackground from '../../images/background-banner.png';

function AboutCoffee(props) {

    return ( 
        <>  
            <Banner title='Our Coffee' background={banerBackground}/>
                <ContainerLarge>
                    <AboutIt/>
                </ContainerLarge>
        </>
     );
}

export default AboutCoffee;