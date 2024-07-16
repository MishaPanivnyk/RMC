import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from 'components/Container/Container';
import {
  HeroBtn,
  HeroContainer,
  HeroDesk,
  HeroImg,
  HeroPreDesk,
  HeroTitle,
} from './Hero.styled';
import heroImage from '../../img/hero-img.jpg';
import { motion, useAnimation } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

export const Hero = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      textControls.start('visible');
      imageControls.start('visible');
    }
  }, [textControls, imageControls, inView]);

  return (
    <HeroContainer>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <HeroPreDesk>Architecture design</HeroPreDesk>
          <HeroTitle>Professional Interior Design</HeroTitle>
          <HeroDesk>
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostrud exercitation ullamco laboris
          </HeroDesk>
          <HeroBtn>Lets work together</HeroBtn>
        </motion.div>
      </Container>
      <motion.div
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
      >
        <HeroImg src={heroImage} alt="Hero" />
      </motion.div>
    </HeroContainer>
  );
};
