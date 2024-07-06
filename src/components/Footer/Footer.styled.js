import styled from 'styled-components';
import heroBg from '../../img/hero-bg.png';

export const FooterContainer = styled.footer`
  padding-top: 30px;
  padding-bottom: 20px;
  background: url(${heroBg}), no-repeat center center;
  background-size: cover;
  background-color: #0b0e17;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterLogoLink = styled.a`
  cursor: pointer;
  & svg {
    margin-bottom: 40px;
    width: 138.69px;
    height: 50px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg {
    transform: scale(1.2);
  }
`;
export const FooterDesc = styled.p`
  color: #abaeb7;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 90px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterListItem = styled.li`
  width: 91px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterListItemLink = styled.a`
  color: #abaeb7;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterListContainer = styled.div`
  display: flex;
  gap: 63px;
  margin-bottom: 53px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterBlockContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 76px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterBlock = styled.div`
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterBlockTitle = styled.h2`
  color: #fff;
  font-family: 'Amarante';
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterBlockDesc = styled.p`
  color: #abaeb7;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
export const FooterCopyright = styled.p`
  color: #abaeb7;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
  padding-top: 10px;
  border-top: 1px solid #fff;
  & a {
    cursor: pointer;
    text-decoration: none;
    margin-left: 5px;
    color: #ffb077;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
