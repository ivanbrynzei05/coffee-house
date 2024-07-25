import styled from "styled-components";

import Navbar from "../navbar/navbar";

const HeaderStyle = styled.header`
    height: 70px;
    display: flex;
    justify-content: left;
    align-items: end;
    position: absolute;
    color: #fff;
    @media (max-width: 540px) {
        justify-content: center;
    }
`

const Header = () => {
    return(
            <HeaderStyle>
                <Navbar/>
            </HeaderStyle>
    )
}

export default Header;
