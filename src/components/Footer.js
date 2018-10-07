import React from 'react';
import styled from 'react-emotion';

const Content = styled.p`
  color: ${props => props.theme.colors.secondary};
  padding: 0 ${props => props.theme.contentPadding};
  text-align: center;
`;

const Footer = () => (
  <Content>
    &copy; 2018 Atte Gartman.
  </Content>
);

export default Footer;
