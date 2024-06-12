import { TouchableOpacityProps } from "react-native";

import { Container, Time, VerticalLine, Dish, Status } from "./styles";

type Props = TouchableOpacityProps & {
  time: string,
  name: string,
  status?: boolean
}

export function MealCard({ time, name, status = true, ...rest }: Props) {
  return (
    <Container 
      activeOpacity={0.5}
      {...rest}
    >
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