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
import { motion } from 'framer-motion';
import aboutImage1 from '../../img/About-1.jpg';
import aboutImage2 from '../../img/About-2.jpg';
import aboutImage3 from '../../img/About-3.jpg';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const About = () => {
  return (
    <AboutContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <AboutTitle>About Us</AboutTitle>
          <AboutDesk>
            As development continues, engineers may visit building destinations
            to guarantee that temporary workers pursue the plan, keep to the
            timetable, utilize the predefined materials, and meet work-quality
            models.
          </AboutDesk>
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
