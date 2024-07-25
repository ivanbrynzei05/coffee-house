import { styled } from "styled-components";
import { ContainerLarge } from "../container/container";

const BannerStyle = styled.div`
    width: 100%;
    height: 260px;
    background-image: url(${props => props.$background});
    background-size: cover; 
    background-position: center;
    display: flex;
    justify-content: center;
    padding-top: 130px;
    h1 {
        color: #fff;
        font-size: 40px;
        font-weight: bold;
    }
`;

function Banner(props) {
    const { title, background } = props
    return ( 
        <BannerStyle $background={background}>
            <ContainerLarge>
                <h1>{title}</h1>
            </ContainerLarge>
        </BannerStyle>
    );
}

export default Banner;
