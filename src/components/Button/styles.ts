import { TouchableOpacity, Text } from "react-native";

import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonTypeStyleProps,
  halfWidth?: boolean
}

export const Container = styled(TouchableOpacity) <Props>`
  width: ${({halfWidth}) => (halfWidth ? '50%' : '100%')};
  height: 50px;
  border-radius: 6px;
  border: 1px solid;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-color: ${({theme}) => theme.COLORS.GRAY_1};
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
`

export const IconWrapper = styled.View`
  margin-right: 10px;
`

export const Title = styled(Text) <Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;