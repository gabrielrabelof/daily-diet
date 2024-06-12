import { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

import { HeaderStyleProps, Container, Header, ButtonIcon, HeaderIcon, Title, Content } from "./styles";

type Props = {
  headerStyle?: HeaderStyleProps,
  title: string,
  children: ReactNode
}

export function Section({ headerStyle = 'DEFAULT', title, children }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Container style={headerStyle}>
      <Header style={headerStyle}>
        <ButtonIcon
          onPress={() => handleGoBack()}
        >
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