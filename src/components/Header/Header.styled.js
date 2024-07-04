import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 50px 0px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const HeaderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const HeaderLogoLink = styled.a`
  cursor: pointer;
  & svg {
    width: 66px;
    height: 24px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    transform: scale(1.2);
  }
`;
export const HeaderBurger = styled.button`
  cursor: pointer;
  background: inherit;
  border: none;

  & svg {
    width: 27px;
    height: 24px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
