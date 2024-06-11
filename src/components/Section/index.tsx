import { ReactNode } from "react";

import { HeaderStyleProps, Container, Header, ButtonIcon, HeaderIcon, Title, Content } from "./styles";

type Props = {
  headerStyle?: HeaderStyleProps,
  title: string,
  children: ReactNode
}

export function Section({ headerStyle = 'DEFAULT', title, children }: Props) {
  return (
    <Container>
      <Header style={headerStyle}>
        <ButtonIcon>
          <HeaderIcon />
        </ButtonIcon>

        <Title>
          {title}
        </Title>
      </Header>

      <Content>

        {children}

      </Content>
    </Container>
  )
}