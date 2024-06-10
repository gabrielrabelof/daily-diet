import styled, { css } from "styled-components/native";

export type FeedbackTypeStyleProps = 'POSITIVE' | 'NEGATIVE'

type Props = {
  type: FeedbackTypeStyleProps
}

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text <Props>`
  ${({theme, type}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  line-height: 64px;
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}  
  text-align: center;
`

export const Status = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;

  margin: 32px 0;
`