import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { GalleryContainer } from './Gallery.styled';
import { Scrollbar } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import galleryImage1 from '../../img/Gallery/Gallery-1.jpg';
import galleryImage2 from '../../img/Gallery/Gallery-2.jpg';
import galleryImage3 from '../../img/Gallery/Gallery-3.jpg';
import galleryImage4 from '../../img/Gallery/Gallery-4.jpg';
import galleryImage5 from '../../img/Gallery/Gallery-5.jpg';
import galleryImage6 from '../../img/Gallery/Gallery-6.jpg';
import galleryImage7 from '../../img/Gallery/Gallery-7.jpg';

const slideVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

export const Gallery = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <GalleryContainer ref={ref}>
      <Swiper
        slidesPerView={2}
        spaceBetween={120}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {[
          galleryImage1,
          galleryImage2,
          galleryImage3,
          galleryImage4,
          galleryImage5,
          galleryImage6,
          galleryImage7,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={image}
              alt={`gallery-${index}`}
              initial="hidden"
              animate={controls}
              variants={slideVariants}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </GalleryContainer>
  );
};
