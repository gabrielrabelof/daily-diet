import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "styled-components/native";
import { Container, Touchable, Overlay, Content, Message, Wrapper } from "./styles";

import { Button } from "@components/Button";

type Props = {
  visible: boolean,
  message: string,
  onClose: () => void
}

export function Modal({ visible, message, onClose }: Props) {
  const { COLORS } = useTheme()

  const navigation = useNavigation();

  function handleHome() {
    navigation.navigate('home');
  }

  return (
      <Container
        transparent
        animationType="fade"
        visible={visible}
        onRequestClose={onClose}
      >

        {visible && (
        <StatusBar 
          barStyle={"light-content"}
          backgroundColor={COLORS.GRAY_1} 
          translucent={false}
        />
      )}

        <Touchable onPress={onClose}>
          <Overlay>
            <Content>
              <Message>
                {message}
              </Message>
              <Wrapper>
                <Button
                  title="Cancel"
                  halfWidth
                  type="SECONDARY"
                  onPress={onClose}
                />
                <Button
                  title="Yes, Delete"
                  halfWidth
                  onPress={handleHome}
                />
              </Wrapper>
            </Content>
          </Overlay>
        </Touchable>
      </Container>
  )
}
