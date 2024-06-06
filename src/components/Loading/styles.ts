import { ActivityIndicator } from "react-native";

import theme from "src/theme";

import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.GRAY_7};
`

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  color: theme.COLORS.GRAY_2
})``