import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
`

const ContainerLarge = styled(Container)`
  max-width: 940px;
`

const ContainerXLarge = styled(Container)`
  max-width: 1140px;
`

export { ContainerLarge, ContainerXLarge }

