import { styled } from "styled-components";
import BeankSrc from "../../images/beans-logo.svg"
import BeansDarkSrc from "../../images/beans-logo-dark.svg"

const BeansLineStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 30px;

    img {
        max-width: 200px;
    }
`

function BeansLine() {
    return (
        <BeansLineStyle>
            <img src={BeankSrc} alt="Beans" />
        </BeansLineStyle>
    );
}
function BeansLineDark() {
    return (
        <BeansLineStyle>
            <img src={BeansDarkSrc} alt="Beans" />
        </BeansLineStyle>
    );
}

export { BeansLine, BeansLineDark };