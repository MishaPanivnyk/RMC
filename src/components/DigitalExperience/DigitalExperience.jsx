import { Container } from 'components/Container/Container';
import {
  DigitalExperienceBtn,
  DigitalExperienceContainer,
  DigitalExperienceImg,
  DigitalExperienceNumber,
  DigitalExperienceNumberDesc,
  DigitalExperienceNumberList,
  DigitalExperienceNumberListItem,
  DigitalExperienceTitle,
} from './DigitalExperience.styled';
import { motion } from 'framer-motion';
import planImage from '../../img/DigitalExperience-svg.svg';

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

export const DigitalExperience = () => {
  return (
    <DigitalExperienceContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <DigitalExperienceTitle>Digital Experience</DigitalExperienceTitle>
          </motion.div>
          <DigitalExperienceNumberList>
            {[
              { number: 75, text: 'Architecture' },
              { number: 85, text: 'Construction' },
              { number: 65, text: 'Interior Design' },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <DigitalExperienceNumberListItem>
                  <DigitalExperienceNumber>
                    {item.number}
                    <span>%</span>
                  </DigitalExperienceNumber>
                  <DigitalExperienceNumberDesc>
                    {item.text}
                  </DigitalExperienceNumberDesc>
                </DigitalExperienceNumberListItem>
              </motion.div>
            ))}
          </DigitalExperienceNumberList>
          <motion.div variants={itemVariants}>
            <DigitalExperienceBtn>Lets work together</DigitalExperienceBtn>
          </motion.div>
          <motion.div variants={itemVariants}>
            <DigitalExperienceImg src={planImage} alt="Plan" width={'100%'} />
          </motion.div>
        </motion.div>
      </Container>
    </DigitalExperienceContainer>
  );
};
