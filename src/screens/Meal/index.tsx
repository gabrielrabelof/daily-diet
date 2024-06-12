import { useNavigation } from "@react-navigation/native";

import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { Name, Description, DateTime, Status, StatusIcon, StatusText, Footer } from "./styles";

import { Section } from "@components/Section";
import { Button } from "@components/Button";

export function Meal() {
  const navigation = useNavigation()

  function handleCreation() {
    navigation.navigate('creation')
  }

  return (
    <Section
      headerStyle="PRIMARY"
      title="Meal"
    >
      <Name>
        Sandwich
      </Name>
      <Description>
        Whole wheat bread sandwich with tuna and lettuce and tomato salad
      </Description>

      <DateTime>
        Date and Time
      </DateTime>
      <Description>
        06/12/2024 at 04:00 PM
      </Description>

      <Status>
        <StatusIcon 
          weight="fill" 
          isDiet
        />

        <StatusText>
          Within the diet
        </StatusText>
      </Status>

      <Footer>
        <Button 
          icon={ <PencilSimpleLine /> }
          title="Edit meal"
          onPress={() => handleCreation()}
        />
        <Button 
          icon={ <Trash /> }
          title="Delete meal"
          type="SECONDARY"
        />
      </Footer>
    </Section>
  )
}