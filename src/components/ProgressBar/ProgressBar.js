/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <ProgressBarBase max="100" size={size} value={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">{value}</ProgressBarBase>;
};

const ProgressBarBase = styled.progress`
  &[value] {
    appearance: none;
    width: 370px;
    height: ${p => {
      switch (p.size) {
        case 'large':
          return '24px';
        case 'small':
          return '8px';
        case 'medium':
        default:
          return '12px';
      }
    }}
  }

  &::-webkit-progress-bar {
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    background-color: ${COLORS.transparentGray15};
    border-radius: ${p => p.size === 'large' ? '8px' : '4px'};
    padding: ${p => p.size === 'large' && '4px'};
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${p => {
      /*
        incrementally round the top-right and bottom-right
        corners as the progress bar nears completion
      */
      if (p.value > 99) {
        const percentPixel = (1 - (100 - p.value)) * 4;
        return `4px ${percentPixel}px ${percentPixel}px 4px`;
      }
      return `4px 0 0 4px`;
    }};
  }
`;

export default ProgressBar;
