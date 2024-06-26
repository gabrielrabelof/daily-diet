import { Text } from "react-native";

import styled, { css } from "styled-components/native";

export type TextTypeStyleProps = 'LARGER' | 'SMALLER'

type Props = {
  type?: TextTypeStyleProps
}

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`

export const Title = styled(Text) <Props>`
  ${({theme, type}) => css`
    font-size: ${type === 'LARGER' ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Subtitle = styled(Text) <Props>`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
  margin-top: 4px;

  text-align: center;
`