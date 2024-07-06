import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { GalleryContainer } from './Gallery.styled';
import { Scrollbar } from 'swiper/modules';
import galleryImage1 from '../../img/Gallery/Gallery-1.jpg';
import galleryImage2 from '../../img/Gallery/Gallery-2.jpg';
import galleryImage3 from '../../img/Gallery/Gallery-3.jpg';
import galleryImage4 from '../../img/Gallery/Gallery-4.jpg';
import galleryImage5 from '../../img/Gallery/Gallery-5.jpg';
import galleryImage6 from '../../img/Gallery/Gallery-6.jpg';
import galleryImage7 from '../../img/Gallery/Gallery-7.jpg';

export const Gallery = () => {
  return (
    <GalleryContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={galleryImage1} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage2} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage3} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage4} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage5} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage6} alt="gallery" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galleryImage7} alt="gallery" />
        </SwiperSlide>
      </Swiper>
    </GalleryContainer>
  );
};
