import { Container } from 'components/Container/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import {
  SpecializationsContainer,
  SpecializationsImg,
  SpecializationsImgDesc,
  SpecializationsImgTextContainer,
  SpecializationsImgTitle,
  SpecializationsPreDesk,
  SpecializationsTitle,
} from './Specializations.styled';

import SpecializationsImage1 from '../../img/Specializations-1.jpg';
import SpecializationsImage2 from '../../img/Specializations-2.jpg';
import SpecializationsImage3 from '../../img/Specializations-3.jpg';
import SpecializationsImage4 from '../../img/Specializations-4.jpg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export const Specializations = () => {
  return (
    <>
      <SpecializationsContainer>
        <Container>
          <SpecializationsPreDesk>TOP SERVICES</SpecializationsPreDesk>
          <SpecializationsTitle>Our Specializations</SpecializationsTitle>
        </Container>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SpecializationsImg src={SpecializationsImage1} alt="Nature 1" />
            <SpecializationsImgTextContainer>
              <SpecializationsImgTitle>Floor plan</SpecializationsImgTitle>
              <SpecializationsImgDesc>
                Tempor incididunt ut labore et dolore magna aliqua.
              </SpecializationsImgDesc>
            </SpecializationsImgTextContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SpecializationsImg src={SpecializationsImage2} alt="Nature 2" />
            <SpecializationsImgTextContainer>
              <SpecializationsImgTitle>Interior Design</SpecializationsImgTitle>
              <SpecializationsImgDesc>
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              </SpecializationsImgDesc>
            </SpecializationsImgTextContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SpecializationsImg src={SpecializationsImage3} alt="Nature 3" />
            <SpecializationsImgTextContainer>
              <SpecializationsImgTitle>
                Architecture Design
              </SpecializationsImgTitle>
              <SpecializationsImgDesc>
                Tempor incididunt ut labore et dolore magna aliqua.
              </SpecializationsImgDesc>
            </SpecializationsImgTextContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SpecializationsImg src={SpecializationsImage4} alt="Nature 4" />
            <SpecializationsImgTextContainer>
              <SpecializationsImgTitle>Construction</SpecializationsImgTitle>
              <SpecializationsImgDesc>
                Tempor incididunt ut labore et dolore magna aliqua.
              </SpecializationsImgDesc>
            </SpecializationsImgTextContainer>
          </SwiperSlide>
        </Swiper>
      </SpecializationsContainer>
    </>
  );
};
