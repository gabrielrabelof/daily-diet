import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  margin-top: 22px;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`