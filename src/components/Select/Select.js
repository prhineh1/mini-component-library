import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Dropdown aria-hidden="true">
        {displayedValue}
      </Dropdown>
      <DropdownIcon id="chevron-down" />
      <HiddenSelect value={value} onChange={onChange}>{children}</HiddenSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: block;
  padding: 12px 16px;
  padding-top: 3px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid #4374CB;
  }
`;

const DropdownIcon = styled(Icon)`
  display: inline-block;
  position: relative;
  top: 7px;
`;

const Dropdown = styled.div`
  margin-right: 24px;
  font-size: 16px;
  line-height: 19px;
  width: fit-content;
  border: 0;
  display: inline-block;
`;

const HiddenSelect = styled.select`
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    opacity: 0;
`;

export default Select;
