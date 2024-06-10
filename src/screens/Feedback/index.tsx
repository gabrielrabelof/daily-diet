import { Button } from "@components/Button";
import { FeedbackTypeStyleProps, Container, Title, Description, Status, Illustration } from "./styles";

import positiveIllustration from "@assets/positive-illustration.png"
import negativeIllustration from "@assets/negative-illustration.png"

type Props = {
  type: FeedbackTypeStyleProps
}

export function Feedback({ type }: Props) {
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
      />
    </Container>
  )
}