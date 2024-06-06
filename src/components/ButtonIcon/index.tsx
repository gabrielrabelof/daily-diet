import { ReactNode, cloneElement } from "react";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: ReactNode
}

export function ButtonIcon({ icon, ...rest }: Props) {
  const { COLORS } = useTheme()

  const styledIcon = icon
    ? cloneElement(icon as React.ReactElement, {
        size: 24,
        color: COLORS.GREEN_DARK,
      })
    : null;

  return (
    <Container
      {...rest}
    >
      {
        icon && (
          <>
            {styledIcon}
          </>
        )
      }
    </Container>
  )
}