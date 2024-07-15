import { Container } from 'components/Container/Container';
import {
  LatestProjectsContainer,
  LatestProjectsImg,
  LatestProjectsImgContainer,
  LatestProjectsItem,
  LatestProjectsItemText,
  LatestProjectsList,
  LatestProjectsPreDesk,
  LatestProjectsTitle,
} from './LatestProjects.styled';
import { motion } from 'framer-motion';
import LatestProjectsImage1 from '../../img/LatestProjects-1.jpg';
import LatestProjectsImage2 from '../../img/LatestProjects-2.jpg';
import LatestProjectsImage3 from '../../img/LatestProjects-3.jpg';
import LatestProjectsImage4 from '../../img/LatestProjects-4.jpg';

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

export const LatestProjects = () => {
  return (
    <LatestProjectsContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <LatestProjectsPreDesk>OUR PROJECT</LatestProjectsPreDesk>
          <LatestProjectsTitle>Our Latest Projects</LatestProjectsTitle>
          <LatestProjectsList>
            {['All', 'Architecture', 'Construction', 'Interior Design'].map(
              (text, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <LatestProjectsItem>
                    <LatestProjectsItemText>{text}</LatestProjectsItemText>
                  </LatestProjectsItem>
                </motion.div>
              )
            )}
          </LatestProjectsList>
          <LatestProjectsImgContainer>
            {[
              LatestProjectsImage1,
              LatestProjectsImage2,
              LatestProjectsImage3,
              LatestProjectsImage4,
            ].map((image, index) => (
              <motion.div key={index} variants={itemVariants}>
                <LatestProjectsImg
                  src={image}
                  alt={`LatestProjects ${index + 1}`}
                  width={'179px'}
                  height={'280px'}
                  className={index % 2 === 1 ? 'img-down' : ''}
                />
              </motion.div>
            ))}
          </LatestProjectsImgContainer>
        </motion.div>
      </Container>
    </LatestProjectsContainer>
  );
};
