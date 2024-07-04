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
import planImage from '../../img/DigitalExperience-svg.svg';

export const DigitalExperience = () => {
  return (
    <DigitalExperienceContainer>
      <Container>
        <DigitalExperienceTitle></DigitalExperienceTitle>
        <DigitalExperienceNumberList>
          <DigitalExperienceNumberListItem>
            <DigitalExperienceNumber>
              75
              <span>%</span>
            </DigitalExperienceNumber>
            <DigitalExperienceNumberDesc>
              Architecture
            </DigitalExperienceNumberDesc>
          </DigitalExperienceNumberListItem>
          <DigitalExperienceNumberListItem>
            <DigitalExperienceNumber>
              85
              <span>%</span>
            </DigitalExperienceNumber>
            <DigitalExperienceNumberDesc>
              Construction
            </DigitalExperienceNumberDesc>
          </DigitalExperienceNumberListItem>
          <DigitalExperienceNumberListItem>
            <DigitalExperienceNumber>
              65
              <span>%</span>
            </DigitalExperienceNumber>
            <DigitalExperienceNumberDesc>
              Interior Design
            </DigitalExperienceNumberDesc>
          </DigitalExperienceNumberListItem>
        </DigitalExperienceNumberList>
        <DigitalExperienceBtn>Lets work together</DigitalExperienceBtn>
        <DigitalExperienceImg src={planImage} alt="Plan" />
      </Container>
    </DigitalExperienceContainer>
  );
};
