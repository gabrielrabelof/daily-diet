import { ClipboardText } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Icon = styled(ClipboardText).attrs(({theme}) => ({
  size: 72,
  color: theme.COLORS.GRAY_4
}))``

export const Message = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_3};
  `}
`
