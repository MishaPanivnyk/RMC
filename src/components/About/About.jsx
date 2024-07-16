import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container } from 'components/Container/Container';
import {
  AboutContainer,
  AboutDesk,
  AboutImg,
  AboutImgContainer,
  AboutNumber,
  AboutNumberContainer,
  AboutNumberDesc,
  AboutTitle,
} from './About.styled';
import { motion, useAnimation } from 'framer-motion';
import aboutImage1 from '../../img/About-1.jpg';
import aboutImage2 from '../../img/About-2.jpg';
import aboutImage3 from '../../img/About-3.jpg';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <AboutContainer ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <AboutTitle>About Us</AboutTitle>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AboutDesk>
              As development continues, engineers may visit building
              destinations to guarantee that temporary workers pursue the plan,
              keep to the timetable, utilize the predefined materials, and meet
              work-quality models.
            </AboutDesk>
          </motion.div>
          <AboutImgContainer>
            <motion.div variants={itemVariants}>
              <AboutImg
                className="about-down"
                src={aboutImage1}
                alt="about"
                width={'185px'}
                height={'280px'}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AboutImg
                src={aboutImage2}
                alt="about"
                width={'185px'}
                height={'280px'}
              />
            </motion.div>
          </AboutImgContainer>
          <motion.div variants={itemVariants}>
            <AboutNumberContainer>
              <AboutNumber>
                85<span>%</span>
              </AboutNumber>
              <AboutNumberDesc>Satisfied Clients</AboutNumberDesc>
            </AboutNumberContainer>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AboutImg src={aboutImage3} alt="about" width={'100%'} />
          </motion.div>
        </motion.div>
      </Container>
    </AboutContainer>
  );
};
