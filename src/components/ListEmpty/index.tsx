import { Container, Icon, Message } from "./style";

type Props = {
  message: string
}

export function ListEmpty({ message }: Props) {
  return (
    <Container>
      <Icon weight="thin" />

      <Message>
        {message}
      </Message>
    </Container>
  )
}