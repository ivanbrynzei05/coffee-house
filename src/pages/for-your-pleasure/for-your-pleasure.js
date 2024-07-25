import AboutOurGoods from "../../components/about-our-goods/about-our-goods";
import Banner from "../../components/banner/banner";
import List from "../../components/list/list";
import { ListItemMain } from "../../components/list-item/list-item";

import background from "../../images/background-banner1.png"
function ForYourPleasure(props) {
    const { data } = props
    const elements = data.map(item => {
        return (
            <ListItemMain
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
        <>
            <Banner
                title='For your pleasure'
                background={background}>
            </Banner>
            <AboutOurGoods/>
            <List>
                {elements}
            </List>
        </>
       

     );
}

export default ForYourPleasure;