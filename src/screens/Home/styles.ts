import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;

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

export const Percent = styled.View`
  width: 100%;
  height: 18%;
  border-radius: 8px;
  margin: 32px 0;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`

export const IconWrapper = styled.View`
  top: 12px;
  right: 12px;
  
  position: absolute;
`

export const ListTitle = styled.Text`
  margin-bottom: 10px;
  
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Date = styled.Text`
  margin-top: 32px;
  
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
