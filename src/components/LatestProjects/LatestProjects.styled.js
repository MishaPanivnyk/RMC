import styled from 'styled-components';

export const LatestProjectsContainer = styled.section`
  padding-bottom: 50px;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
`;

export const LatestProjectsPreDesk = styled.p`
  color: #ffc978;
  font-family: 'Amarante';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.8px;
  margin-bottom: 21px;
`;
export const LatestProjectsTitle = styled.h2`
  color: #fff;
  font-family: 'Poppins';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: capitalize;
  margin-bottom: 30px;
`;
export const LatestProjectsImg = styled.img`
  background-repeat: no-repeat;
`;
export const LatestProjectsImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  .img-down {
    margin-top: 30px;
  }
`;

export const LatestProjectsList = styled.ul`
  display: flex;
  gap: 25px;
  margin-bottom: 42px;
`;
export const LatestProjectsItem = styled.li``;
export const LatestProjectsItemText = styled.button`
  color: #abaeb7;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  background: inherit;
  border: none;
`;
