import { Modal, TouchableWithoutFeedback } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(Modal)`
`

export const Touchable = styled(TouchableWithoutFeedback)`
`

export const Overlay = styled.View`
  flex: 1;
  padding: 24px;
  
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
`

export const Content = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  padding: 24px;
  gap: 42px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`

export const Message = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}

  text-align: center;
`

export const Wrapper = styled.View`
  gap: 12px;
  
  flex-direction: row;
  justify-content: space-between;
`
