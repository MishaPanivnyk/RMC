import { Container } from 'components/Container/Container';
import {
  FooterBlock,
  FooterBlockContainer,
  FooterBlockDesc,
  FooterBlockTitle,
  FooterContainer,
  FooterCopyright,
  FooterDesc,
  FooterList,
  FooterListContainer,
  FooterListItem,
  FooterListItemLink,
  FooterLogoLink,
} from './Footer.styled';
import sprite from 'img/sprite.svg';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <FooterLogoLink>
            <svg className="icon-logo">
              <use href={sprite + '#icon-logo'} />
            </svg>
          </FooterLogoLink>
          <FooterDesc>
            Take a look at how we designed this house simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old.
          </FooterDesc>
          <FooterListContainer>
            <FooterList>
              <FooterListItem>
                <FooterListItemLink>THE STUDIO</FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink>PROJECTS</FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink>architecture</FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink>Blog</FooterListItemLink>
              </FooterListItem>
              <FooterListItem>
                <FooterListItemLink>Contact</FooterListItemLink>
              </FooterListItem>
            </FooterList>
            <FooterBlockContainer>
              <motion.div variants={footerVariants}>
                <FooterBlock>
                  <FooterBlockTitle>Visit</FooterBlockTitle>
                  <FooterBlockDesc>
                    Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184
                  </FooterBlockDesc>
                </FooterBlock>
              </motion.div>
              <motion.div variants={footerVariants}>
                <FooterBlock>
                  <FooterBlockTitle>WhatsApp</FooterBlockTitle>
                  <FooterBlockDesc>+88 017-6153-1774</FooterBlockDesc>
                </FooterBlock>
              </motion.div>
            </FooterBlockContainer>
          </FooterListContainer>
        </motion.div>
        <motion.div variants={footerVariants}>
          <FooterCopyright>
            © Copyright 2022 Email:
            <a href="mailto:asibulasik@gmail.com">Asibulasik@gmail.com</a>
          </FooterCopyright>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};
