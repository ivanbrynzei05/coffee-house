import styled from "styled-components";

import LogoSrc from '../../images/logo.svg';
import LogoDarkSrc from '../../images/logo-dark.svg';

const StyledNavLink = styled.div`
display: inline;
    img {
        width: auto;
        height: 40px;
    }
    span {
      font-size: inherit;
        color: inherit;
        font-weight: normal;
    }
`;

const Logo = () => {
  return (
    <StyledNavLink>
      <img src={LogoSrc} alt="logo" />
      <span>Coffee house</span>
    </StyledNavLink>
  );
};

const LogoDark = () => {
  return (
    <StyledNavLink>
      <img src={LogoDarkSrc} alt="logo" />
      <span>Coffee house</span>
    </StyledNavLink>
  );
};

export { Logo, LogoDark };
