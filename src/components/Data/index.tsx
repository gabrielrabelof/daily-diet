import { DataTypeStyleProps, Container } from "./styles";

import { Highlight } from "@components/Highlight";

type Props = {
  title: string | number,
  subtitle: string
  halfWidth?: boolean
  type?: DataTypeStyleProps
}

export function Data({ title, subtitle, halfWidth = false, type = 'DEFAULT' }: Props) {
  return (
    <Container
      halfWidth={halfWidth}
      type={type}
    >
      <Highlight 
        title={title}
        subtitle={subtitle}
        type="SMALLER"
      />
    </Container>
  )
}