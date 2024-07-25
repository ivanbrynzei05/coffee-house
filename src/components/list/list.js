import { styled } from "styled-components";

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 220px);
    justify-content: space-around;
    row-gap: 60px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 220px);
    }

    @media (max-width: 540px) {
        grid-template-columns: repeat(1, 220px);
    }
`

export default List;