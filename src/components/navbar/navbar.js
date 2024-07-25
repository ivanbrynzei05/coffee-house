import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { Logo, LogoDark } from "../logo/logo";


const NavbarStyle = styled.nav`
   display: inline;
   font-size: 12px;
   a {
        font-size: inherit;
        font-weight: normal;
        margin-right: 40px;
        color: inherit;
        border: none;
        text-decoration: none;
        height: 100%;
        &:last-child {
            margin-right: 0;
        }
    }
    .logo {
        margin-left: 0;
    }

    @media (max-width: 540px) {
        font-size: 10px;
        a {
            margin-right: 20px;
        }
    }
`
function Navbar() {
    return ( 
        <NavbarStyle>
            <NavLink to="/">
                <Logo/>
            </NavLink>
            <NavLink to="/our-coffee">Our coffee</NavLink>
            <NavLink to="/for-your-pleasure">For your pleasure</NavLink> 
        </NavbarStyle>
    
    );
}

function NavbarDark() {
    return ( 
        <NavbarStyle>
            <NavLink to="/">
                <LogoDark />
            </NavLink>
            <NavLink to="/our-coffee">Our coffee</NavLink>
            <NavLink to="/for-your-pleasure">For your pleasure</NavLink> 
        </NavbarStyle>
    );
}

export default Navbar;
export { NavbarDark };