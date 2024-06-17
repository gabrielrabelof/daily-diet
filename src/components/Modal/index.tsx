import { useEffect } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Touchable, Overlay, Content, Message, Wrapper } from "./styles";
import { Button } from "@components/Button";

type Props = {
  visible: boolean,
  message: string,
  onClose: () => void
  onRemove: () => void
}

export function Modal({ visible, message, onClose, onRemove }: Props) {
  const { COLORS } = useTheme()

  useEffect(() => {
    if (visible) {
      StatusBar.setBarStyle("light-content")
      StatusBar.setBackgroundColor(COLORS.GRAY_1)
    } else {
      StatusBar.setBarStyle("dark-content")
      StatusBar.setBackgroundColor("transparent")
    }
  }, [visible, COLORS.GRAY_1])

  return (
    <Container
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
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
                onPress={onRemove}
              />
            </Wrapper>
          </Content>
        </Overlay>
      </Touchable>
    </Container>
  )
}
