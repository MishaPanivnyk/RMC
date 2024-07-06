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
import aboutImage1 from '../../img/About-1.jpg';
import aboutImage2 from '../../img/About-2.jpg';
import aboutImage3 from '../../img/About-3.jpg';

export const About = () => {
  return (
    <AboutContainer>
      <Container>
        <AboutTitle>About Us</AboutTitle>
        <AboutDesk>
          As development continues, engineers may visit building destinations to
          guarantee that temporary workers pursue the plan, keep to the
          timetable, utilize the predefined materials, and meet work-quality
          models.
        </AboutDesk>
        <AboutImgContainer>
          <AboutImg
            className="about-down"
            src={aboutImage1}
            alt="about"
            width={'185px'}
            height={'280px'}
          />
          <AboutImg
            src={aboutImage2}
            alt="about"
            width={'185px'}
            height={'280px'}
          />
        </AboutImgContainer>
        <AboutNumberContainer>
          <AboutNumber>
            85<span>%</span>
          </AboutNumber>
          <AboutNumberDesc>Satisfied Clients</AboutNumberDesc>
        </AboutNumberContainer>
        <AboutImg src={aboutImage3} alt="about" width={'100%'} />
      </Container>
    </AboutContainer>
  );
};
