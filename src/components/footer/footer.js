import styled from "styled-components";

import { ContainerLarge } from "../container/container";
import { BeansLineDark } from "../beans-line/beans-line";
import { NavbarDark } from "../navbar/navbar";

const FooterStyle = styled.footer`
    width: 100%;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: #000;
    padding-top: 30px;
    padding-bottom: 20px;
    nav {
        margin-bottom: 30px;
    }
`

const Footer = () => {
    return(
        <ContainerLarge>
            <FooterStyle>
                <NavbarDark/>
                <BeansLineDark/>
            </FooterStyle>
        </ContainerLarge>
    )
}

export default Footer;
