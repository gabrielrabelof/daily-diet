import { View } from "react-native";

import styled from "styled-components/native";

export type DataTypeStyleProps = 'DEFAULT' | 'PRIMARY' | 'SECONDARY'

type Props = {
  halfWidth?: boolean
  type?: DataTypeStyleProps
}

export const Container = styled(View) <Props>`
  width: ${({ halfWidth }) => (halfWidth ? '48%' : '100%')};
  height:${({ halfWidth }) => (halfWidth ? '110px' : '90px')};
  border-radius: 8px;
  margin-top: 12px;
  padding: 0 12px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme, type}) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT
    : type === 'SECONDARY' ? theme.COLORS.RED_LIGHT
    : theme.COLORS.GRAY_6
  };
`