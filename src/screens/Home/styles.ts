import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px 24px 8px 24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Photo = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 2px solid ${({theme}) => theme.COLORS.GRAY_1};
  border-radius: 50px;
`

export const UserPicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  resize: cover;
`

export const Percent = styled.TouchableOpacity <Props>`
  width: 100%;
  height: 18%;
  border-radius: 8px;
  margin-top: 32px;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const IconWrapper = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))`

  top: 12px;
  right: 12px;
  
  position: absolute;
`

export const ListTitle = styled.Text`
  margin: 32px 0 10px 0;
  
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const MealDate = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
