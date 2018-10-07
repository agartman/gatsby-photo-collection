import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import Overdrive from 'react-overdrive';

const Wrapper = styled.div`
    background: url("${props => props.theme.bgPattern}") #000;
    display: flex;
    position: relative;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidths.general};
  padding: 3rem 1.0875rem 10rem 1.0875rem;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;


const Name = styled.h1`
  margin: 1rem 0 0.25rem 0;
  color: ${props => props.theme.colors.color};
`;

const Header = ({ avatar, name, location, socialMedia }) => (
  <Wrapper>
    <Content>
      <Overdrive id="name-to-back">
        <Name>{name}</Name>
      </Overdrive>
    </Content>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
