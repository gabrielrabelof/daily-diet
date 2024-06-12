import { useNavigation } from "@react-navigation/native";

import { FeedbackTypeStyleProps, Container, Title, Description, Status, Illustration } from "./styles";

import positiveIllustration from "@assets/positive-illustration.png"
import negativeIllustration from "@assets/negative-illustration.png"

import { Button } from "@components/Button";

type Props = {
  type?: FeedbackTypeStyleProps
}

export function Feedback({ type = 'POSITIVE' }: Props) {
  const navigation = useNavigation()

  function handleHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {
        type === 'POSITIVE' ? 
          <>
            <Title type={type}>
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
            <Title type={type}>
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