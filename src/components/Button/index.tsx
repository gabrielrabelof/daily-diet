import { ReactNode, cloneElement } from "react";

import { useTheme } from "styled-components";

import { ButtonTypeStyleProps, Container, IconWrapper, Title } from "./styles";

type Props = {
  title: string,
  type?: ButtonTypeStyleProps
  icon?: ReactNode,
  halfWidth?: boolean
}

export function Button({ type = 'PRIMARY', icon, title, halfWidth }: Props) {
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