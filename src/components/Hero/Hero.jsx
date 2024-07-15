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
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.5 }}
        >
          <HeroPreDesk>Architecture design</HeroPreDesk>
          <HeroTitle>Professional Interior Design</HeroTitle>
          <HeroDesk>
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam quis nostruercitation ullamco laboris
          </HeroDesk>
          <HeroBtn>Lets work together</HeroBtn>
        </motion.div>
      </Container>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroImg src={heroImage} alt="Hero" />
      </motion.div>
    </HeroContainer>
  );
};
