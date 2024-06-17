import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

type Props = {
  higher?: boolean
  halfWidth?: boolean
}

export const Container = styled(TextInput) <Props>`
  width: ${({halfWidth}) => (halfWidth ? '48%' : '100%')};
  height: ${({higher}) => (higher ? '120px' : '50px')};
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-top: 6px;
  padding: 14px;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`
