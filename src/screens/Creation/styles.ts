import { Circle } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export type RadioButtonTypeStyleProps = 'STANDART' | 'PRIMARY' | 'SECONDARY'

type Props = {
  isDiet?: boolean,
  type?: RadioButtonTypeStyleProps
}

export const FormWrapper = styled.View`
  gap: 14px;

  flex-direction: row;
  justify-content: space-between;
`

export const RadioButton = styled.TouchableOpacity <Props>`
  width: 48%;
  height: 50px;
  border: 1px solid;
  border-radius: 6px;
  margin-top: 8px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: ${({theme, type}) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT
    : type === 'SECONDARY' ? theme.COLORS.RED_LIGHT 
    : theme.COLORS.GRAY_6
  };
  border-color: ${({theme, type}) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK
    : type === 'SECONDARY' ? theme.COLORS.RED_DARK 
    : theme.COLORS.GRAY_6
  };
`

export const StatusIcon = styled(Circle).attrs <Props>(({theme, isDiet}) => ({
  size: 12,
  color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin-right: 8px;
`

export const TextButton = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Footer = styled.View`
  flex: 1;

  justify-content: flex-end;
  align-items: center;
`
