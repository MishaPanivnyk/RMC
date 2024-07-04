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

export const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroPreDesk>Architecture design</HeroPreDesk>
        <HeroTitle>Professional Interior Design</HeroTitle>
        <HeroDesk>
          Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam quis nostruercitation ullamco laboris
        </HeroDesk>
        <HeroBtn>Lets work together</HeroBtn>
      </Container>
      <HeroImg src={heroImage} alt="Hero" />
    </HeroContainer>
  );
};
