import styled from 'styled-components';

export const SpecializationsContainer = styled.section`
  padding-bottom: 50px;
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 412px;
  }

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const SpecializationsPreDesk = styled.p`
  color: #ffc978;
  font-family: 'Poppins';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.8px;
  margin-bottom: 17px;
`;
export const SpecializationsTitle = styled.h2`
  color: #fff;
  font-family: 'Poppins';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;
export const SpecializationsImg = styled.img`
  width: 300px;
  height: 412px;
  position: relative;
`;
export const SpecializationsImgTextContainer = styled.div`
  position: absolute;
  padding: 20px;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(56, 101, 107, 0) 0.42%,
    #063339 100%
  );
`;
export const SpecializationsImgTitle = styled.h3`
  color: #fff;
  font-family: 'Amarante';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 11px;
`;
export const SpecializationsImgDesc = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
