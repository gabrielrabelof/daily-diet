import { Circle } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export type RadioButtonTypeStyleProps = 'STANDART' | 'PRIMARY' | 'SECONDARY'

type Props = {
  isDiet?: boolean,
  type?: RadioButtonTypeStyleProps
}

export const Name = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  line-height: 42px;
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 16px;
`

export const DateTime = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}

  line-height: 32px;
`

export const Status = styled.View`
  height: 36px;
  width: 45%;
  border-radius: 50px;
  margin-top: 12px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({theme}) => theme.COLORS.GRAY_6};
`

export const StatusIcon = styled(Circle).attrs <Props>(({theme, isDiet}) => ({
  size: 12,
  color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-right: 8px;
`

export const StatusText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Footer = styled.View`
  flex: 1;
  gap: 12px;

  justify-content: flex-end;
  align-items: center;
`