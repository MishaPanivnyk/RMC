import { Container } from 'components/Container/Container';
import {
  HeaderBurger,
  HeaderContainer,
  HeaderLinkContainer,
  HeaderLogoLink,
} from './Header.styled';
import sprite from 'img/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderLinkContainer>
          <HeaderLogoLink>
            <svg className="icon-logo">
              <use href={sprite + '#icon-logo'} />
            </svg>
          </HeaderLogoLink>
          <HeaderBurger>
            <svg className="icon-burger">
              <use href={sprite + '#icon-burger'} />
            </svg>
          </HeaderBurger>
        </HeaderLinkContainer>
      </Container>
    </HeaderContainer>
  );
};
