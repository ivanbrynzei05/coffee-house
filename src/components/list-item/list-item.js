import { NavLink } from "react-router-dom";

import { styled } from "styled-components";

const ListItemHomeStyle = styled(NavLink)`
    width: 100%;
    height: auto;
    background-color: rgba(255, 255, 255, 0.65);
    display: flex;
    padding: 20px;
    flex-direction: column;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    img {
        width: 150px;
        height: 130px;
        object-fit: cover;
        margin: auto;
        margin-bottom: 14px;
    }
    h3 {
        font-size: 14px;
        margin-bottom: 10px;
        text-align: center;
    }
    span {
        font-size: 14px;
        margin-bottom: 10px;
        text-align: right;
    }
    p {
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        text-align: right;
    }
    
`
const ListItemMainStyle = styled(ListItemHomeStyle)`
    box-shadow: 0px 0px 10px 0px #00000030;
    height: 260px;
    padding: 25px;
    img {
        width: 100%;
    }
`

function ListItemHome(props) {
    const {id, name, price, photo} = props;


    return ( 
        <ListItemHomeStyle to={`/about-coffee/${id}`}>
            <img src={photo} alt="Coffee" />
            <h3>{name}</h3>
            <p>{price}$</p>
        </ListItemHomeStyle>
     );
}

function ListItemMain(props) {
    const {id, name, country, price, photo} = props;

    return ( 
        <ListItemMainStyle to={`/about-coffee/${id}`}>
            <img src={photo} alt="Coffee" />
            <h3>{name}</h3>
            <span>{country}</span>
            <p>{price}$</p>
        </ListItemMainStyle>
     );
}

export { ListItemHome, ListItemMain};