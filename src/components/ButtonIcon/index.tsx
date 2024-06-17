import { ReactNode, cloneElement } from "react";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components/native";

import { Container } from "./styles";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = TouchableOpacityProps & {
  icon?: ReactNode
  type?: ButtonTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
  const { COLORS } = useTheme()

  const styledIcon = icon
    ? cloneElement(icon as React.ReactElement, {
        size: 24,
        color: type === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK,
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