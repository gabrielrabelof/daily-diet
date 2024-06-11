import { ArrowLeft } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export type HeaderStyleProps = 'DEFAULT' | 'PRIMARY' | 'SECONDARY'

type Props = {
  style?: HeaderStyleProps
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_5};
`

export const Header = styled.View <Props>`
  flex: 0.15;
  
  align-items: center;
  justify-content: center;

  background-color: ${({theme, style}) => 
    style === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT
    : style === 'SECONDARY' ? theme.COLORS.RED_LIGHT
    : theme.COLORS.GRAY_5
  };   
`

export const ButtonIcon = styled.TouchableOpacity`
  left: 24px;
  
  position: absolute;
`

export const HeaderIcon = styled(ArrowLeft).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GRAY_2
}))``

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Content = styled.View`
  flex: 0.85;
  padding: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`