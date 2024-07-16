import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
import { motion, useAnimation } from 'framer-motion';
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
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <LatestProjectsContainer ref={ref}>
      <Container>
        <motion.div
          initial="hidden"
          animate={controls}
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
                  width={'170px'}
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
