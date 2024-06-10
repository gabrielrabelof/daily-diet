import { Title } from "./styles";

type Props = {
  label: string
}

export function Label({ label }: Props) {
  return (
    <Title>
      {label}
    </Title>
  )
}