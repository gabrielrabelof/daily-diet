import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const Header = styled.View`
  flex: 0.2;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const IconWrapper = styled.View`
  top: 32px;
  left: 24px;
  
  position: absolute;
`

export const Content = styled.View`
  flex: 0.8;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`

export const Title = styled.Text`
  margin: 12px 0;
  
  align-self: center;

  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const DataWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
