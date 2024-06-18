import { TextTypeStyleProps, Container, Subtitle, Title } from "./styles";

type Props = {
  title: string | number,
  subtitle: string
  type?: TextTypeStyleProps
}

export function Highlight({ title, subtitle, type = 'LARGER' }: Props) {
  return (
    <Container>
      <Title
        type={type}
      > 
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  )
}