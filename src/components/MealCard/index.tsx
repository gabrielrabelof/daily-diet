import { Container, Time, VerticalLine, Dish, Status } from "./styles";

type Props = {
  time: string,
  name: string,
  status?: boolean
}

export function MealCard({ time, name, status = true }: Props) {
  return (
    <Container activeOpacity={0.5}>
      <Time>
        {time}
      </Time>

      <VerticalLine />

      <Dish>
        {name}
      </Dish>

      <Status 
        status={status}
      />

    </Container>
  )
}