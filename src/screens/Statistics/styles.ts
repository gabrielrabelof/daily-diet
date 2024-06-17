import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Header = styled.View <Props>`
  flex: 0.2;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const IconWrapper = styled.View`
  top: 18px;
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
