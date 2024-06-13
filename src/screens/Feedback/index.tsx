import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Title, Description, Status, Illustration } from "./styles";

import positiveIllustration from "@assets/positive-illustration.png"
import negativeIllustration from "@assets/negative-illustration.png"

import { Button } from "@components/Button";

type RouteParams = {
  status: boolean
}

export function Feedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { status } = route.params as RouteParams

  function handleHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {
        status === true ? 
          <>
            <Title type={status}>
              Keep it Up!
            </Title>

            <Description>
              You are still <Status>within the diet.</Status> Well done!
            </Description>

            <Illustration 
              source={positiveIllustration}
            />
          </>
        :
          <>
            <Title type={status}>
              Too bad!
            </Title>

            <Description>
            You went <Status>off the diet</Status> this time, but keep trying and don't give up!
            </Description>

            <Illustration 
              source={negativeIllustration}
            />
          </>
      }

      <Button
        title="Go to the homepage"
        halfWidth
        onPress={() => handleHome()}
      />
    </Container>
  )
}