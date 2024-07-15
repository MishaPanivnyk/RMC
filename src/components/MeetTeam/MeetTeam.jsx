import { Container } from 'components/Container/Container';
import {
  MeetTeamContainer,
  MeetTeamDesc,
  MeetTeamImage,
  MeetTeamImageContainer,
  MeetTeamPreDesk,
  MeetTeamTitle,
} from './MeetTeam.styled';
import meetTeamImage from '../../img/MeetTeam.jpg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const MeetTeam = () => {
  return (
    <MeetTeamContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <MeetTeamPreDesk>OUR TEAM</MeetTeamPreDesk>
          </motion.div>
          <motion.div variants={itemVariants}>
            <MeetTeamTitle>Meet With Our Team</MeetTeamTitle>
          </motion.div>
        </motion.div>
      </Container>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MeetTeamImageContainer>
          <motion.div variants={itemVariants}>
            <MeetTeamImage src={meetTeamImage} alt="Team" />
          </motion.div>
        </MeetTeamImageContainer>
        {[
          'Cody Fisher - CEO',
          'Savannah Nguyen - Interior architect',
          'Jerome Bell - Interior',
          'Cameron Williamson - architect',
          'Marvin McKinney - Construction head',
        ].map((desc, index) => (
          <motion.div key={index} variants={itemVariants}>
            <MeetTeamDesc>{desc}</MeetTeamDesc>
          </motion.div>
        ))}
      </motion.div>
    </MeetTeamContainer>
  );
};
