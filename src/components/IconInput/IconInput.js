import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const sizes = {
    large: {
      '--border-width': 2 + 'px',
      '--padding-bottom': 5 + 'px',
      '--font-size': 18 + 'px',
      '--left-padding': 17 + 'px',
      '--icon-width': 16 + 'px'
    },
    small: {
      '--border-width': 1 + 'px',
      '--padding-bottom': 2 + 'px',
      '--font-size': 14 + 'px',
      '--left-padding': 11.33 + 'px',
      '--icon-width': 10.67 + 'px'
    }
  };

  const styles = {...sizes[size], '--width': width + 'px'};
  return (
  <Wrapper style={styles}>
    <ExtendedIcon size={size === 'small' ? 10.67 : 16} id={icon}></ExtendedIcon>
    <VisuallyHidden>
      <label for="iconInput">{label}</label>
    </VisuallyHidden>
    <TextInput type="text" placeholder={placeholder} id="iconInput" />
  </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const ExtendedIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: var(--padding-bottom);
  margin: auto;
  color: currentColor;
`;

const TextInput = styled.input`
  position: relative;
  background-color: transparent;
  border: 0;
  width: var(--width);
  font-size: var(--font-size);
  padding: 0;
  padding-left: calc(var(--left-padding) + var(--icon-width));
  padding-bottom: var(--padding-bottom);
  border-style: solid;
  border-color: ${COLORS.black};
  border-bottom-width: var(--border-width);
  font-weight: bold;
  color: currentColor;

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
