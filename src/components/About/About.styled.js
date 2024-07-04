import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding-bottom: 50px;
  padding-top: 23px;
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const AboutTitle = styled.h2`
  color: #fff;
  font-family: 'Poppins';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
export const AboutDesk = styled.p`
  color: #abaeb7;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;
export const AboutImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 30px;
  .about-down {
    margin-top: 50px;
  }
`;
export const AboutImg = styled.img``;
export const AboutNumberContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const AboutNumber = styled.p`
  color: #fff;
  font-family: 'Amarante';
  font-size: 88px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #fff;
    font-family: 'Poppins';
    font-size: 44px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const AboutNumberDesc = styled.p`
  color: #abaeb7;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  max-width: 68px;
`;
