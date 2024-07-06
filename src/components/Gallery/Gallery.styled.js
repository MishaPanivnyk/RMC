import styled from 'styled-components';

export const GalleryContainer = styled.section`
  padding-top: 50px;
  .swiper {
    padding-bottom: 50px;
  }
  .swiper-slide {
    width: 258px !important;
    margin-right: 0px !important;
  }
  .swiper-scrollbar-horizontal {
    /* bottom: -20px; */
    opacity: 1 !important;
    border-radius: 0 !important;
    height: 15px;
    background: #23262f !important;
  }
  .swiper-scrollbar-drag {
    opacity: 1 !important;
    border-radius: 0 !important;
    background: #41444d !important;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;
