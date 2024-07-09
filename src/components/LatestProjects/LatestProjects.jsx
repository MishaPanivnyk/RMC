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
import LatestProjectsImage1 from '../../img/LatestProjects-1.jpg';
import LatestProjectsImage2 from '../../img/LatestProjects-2.jpg';
import LatestProjectsImage3 from '../../img/LatestProjects-3.jpg';
import LatestProjectsImage4 from '../../img/LatestProjects-4.jpg';

export const LatestProjects = () => {
  return (
    <LatestProjectsContainer>
      <Container>
        <LatestProjectsPreDesk>OUR PROJECT</LatestProjectsPreDesk>
        <LatestProjectsTitle>Our Latest Projects</LatestProjectsTitle>
        <LatestProjectsList>
          <LatestProjectsItem>
            <LatestProjectsItemText>All</LatestProjectsItemText>
          </LatestProjectsItem>
          <LatestProjectsItem>
            <LatestProjectsItemText>Architecture</LatestProjectsItemText>
          </LatestProjectsItem>
          <LatestProjectsItem>
            <LatestProjectsItemText>Construction</LatestProjectsItemText>
          </LatestProjectsItem>
          <LatestProjectsItem>
            <LatestProjectsItemText>Interior Design</LatestProjectsItemText>
          </LatestProjectsItem>
        </LatestProjectsList>
        <LatestProjectsImgContainer>
          <LatestProjectsImg
            src={LatestProjectsImage1}
            alt="LatestProjects"
            width={'179px'}
            height={'280px'}
          />
          <LatestProjectsImg
            src={LatestProjectsImage2}
            alt="LatestProjects"
            className="img-down"
            width={'179px'}
            height={'280px'}
          />
          <LatestProjectsImg
            src={LatestProjectsImage3}
            alt="LatestProjects"
            width={'179px'}
            height={'280px'}
          />
          <LatestProjectsImg
            src={LatestProjectsImage4}
            alt="LatestProjects"
            className="img-down"
            width={'179px'}
            height={'280px'}
          />
        </LatestProjectsImgContainer>
      </Container>
    </LatestProjectsContainer>
  );
};
