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

export const MeetTeam = () => {
  return (
    <MeetTeamContainer>
      <Container>
        <MeetTeamPreDesk>OUR TEAM</MeetTeamPreDesk>
        <MeetTeamTitle>Meet With Our Team</MeetTeamTitle>
      </Container>
      <MeetTeamImageContainer>
        <MeetTeamImage src={meetTeamImage} alt="Team" />
      </MeetTeamImageContainer>
      <MeetTeamDesc>Cody Fisher - CEO</MeetTeamDesc>
      <MeetTeamDesc>Savannah Nguyen - Interior architect</MeetTeamDesc>
      <MeetTeamDesc>Jerome Bell - Interior</MeetTeamDesc>
      <MeetTeamDesc>Cameron Williamson - architect</MeetTeamDesc>
      <MeetTeamDesc>Marvin McKinney - COnstruction head</MeetTeamDesc>
    </MeetTeamContainer>
  );
};
