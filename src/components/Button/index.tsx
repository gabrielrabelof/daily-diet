import { ReactNode, cloneElement } from "react";
import { TouchableOpacityProps } from "react-native";

import { useTheme } from "styled-components";

import { ButtonTypeStyleProps, Container, IconWrapper, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string,
  type?: ButtonTypeStyleProps
  icon?: ReactNode,
  halfWidth?: boolean
}

export function Button({ type = 'PRIMARY', icon, title, halfWidth, ...rest }: Props) {
  const { COLORS } = useTheme()

  const styledIcon = icon
    ? cloneElement(icon as React.ReactElement, {
        size: 20,
        color: type === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_1,
      })
    : null;

  return (
    <Container 
      activeOpacity={0.7}
      type={type}
      halfWidth={halfWidth}
      {...rest}
    >
      {
        icon && (
          <IconWrapper>
            {styledIcon}
          </IconWrapper>
        )
      }

      <Title
        type={type}
      >
        {title}
      </Title>
    </Container>
  )
}