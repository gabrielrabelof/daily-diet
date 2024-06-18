import { View } from "react-native";

import styled, { css } from "styled-components/native";

type Props = {
  status?: boolean
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  margin-top: 8px;
  padding: 0 12px;

  align-items: center;
  flex-direction: row;
`

export const Time = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
 `}
`

export const VerticalLine = styled.View`
  width: 1px;
  height: 35%;
  margin: 0 12px;

  background-color: ${({theme}) => theme.COLORS.GRAY_4};
`

export const Dish = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}

  flex: 1;
  margin-right: 52px; 
`

export const Status = styled(View) <Props>`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  
  position: absolute;
  right: 12px;

  background-color: ${({theme, status}) => status === true ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
`
