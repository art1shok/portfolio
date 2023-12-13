import styled from '@emotion/styled';

import { IButton } from './types';

export const SButton = styled.button<IButton>`
  display: inline-flex;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  padding: 13px 12px;

  font-weight: 700;
  font-family: 'DM Sans', sans-serif;

  cursor: pointer;
`;
