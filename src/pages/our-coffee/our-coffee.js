import { styled } from "styled-components";

import Banner from "../../components/banner/banner";
import AboutOurBeans from "../../components/about-our-beans/about-our-beans";
import Search from "../../components/search/search";
import Filter from "../../components/filter/filter";
import { ContainerLarge } from "../../components/container/container";
import List from "../../components/list/list";
import { ListItemMain } from "../../components/list-item/list-item";

import banerBackground from '../../images/background-banner.png';

const SearchPanne = styled.section`
    padding-top: 60px;
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-bottom: 60px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        gap: 10px;
    }
`
function OurCoffee(props) {

    const elements = props.data.map(item => {
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
            <Banner title='Our Coffee' background={banerBackground}/>
            <AboutOurBeans/>
                <ContainerLarge>
                    <SearchPanne>
                        <Search 
                            onSearch={(term) => props.onSearch(term)}
                        />
                        <Filter
                            onFilter={(filter) => props.onFilter(filter)}
                            filter={props.filter}
                        />
                    </SearchPanne>
                    <List>
                        {elements}
                    </List>
                </ContainerLarge>
        </>

     );
}

export default OurCoffee;