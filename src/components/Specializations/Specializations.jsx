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
import { motion } from 'framer-motion';

import SpecializationsImage1 from '../../img/Specializations-1.jpg';
import SpecializationsImage2 from '../../img/Specializations-2.jpg';
import SpecializationsImage3 from '../../img/Specializations-3.jpg';
import SpecializationsImage4 from '../../img/Specializations-4.jpg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

export const Specializations = () => {
  return (
    <SpecializationsContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <SpecializationsPreDesk>TOP SERVICES</SpecializationsPreDesk>
          <SpecializationsTitle>Our Specializations</SpecializationsTitle>
        </motion.div>
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
        {[
          SpecializationsImage1,
          SpecializationsImage2,
          SpecializationsImage3,
          SpecializationsImage4,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <SpecializationsImg
                src={image}
                alt={`Specialization ${index + 1}`}
              />
              <SpecializationsImgTextContainer>
                <SpecializationsImgTitle>
                  {index === 0 && 'Floor plan'}
                  {index === 1 && 'Interior Design'}
                  {index === 2 && 'Architecture Design'}
                  {index === 3 && 'Construction'}
                </SpecializationsImgTitle>
                <SpecializationsImgDesc>
                  Tempor incididunt ut labore et dolore magna aliqua.
                </SpecializationsImgDesc>
              </SpecializationsImgTextContainer>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SpecializationsContainer>
  );
};
