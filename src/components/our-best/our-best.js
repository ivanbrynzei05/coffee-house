import { styled } from "styled-components";

import BackgroundImg from "../../images/background.png"
import { ContainerLarge } from "../container/container";
import { Title } from "../title/title";
import { ListItemHome } from "../list-item/list-item";
import List from "../list/list";


const OurBestStyle = styled.section`
    padding-top: 80px;
    padding-bottom: 110px;
    background-image: url(${BackgroundImg});
    text-align: center;
    h2 {
        margin-bottom: 40px;
    }
`

function OurBest(props) {
    const { data } = props
    const elements = data.map(item => {
        return (
            <ListItemHome
                id={item.id}
                name={item.name}
                description={item.description}
                country={item.country}
                price={item.price}
                photo={item.photo}
                key={item.id}/>
        )
    })

    return (  
        <OurBestStyle>
            <ContainerLarge>
            <Title>Our best</Title>
                <List>
                    {elements}
                </List>
            </ContainerLarge>

        </OurBestStyle>
    );
}

export default OurBest;