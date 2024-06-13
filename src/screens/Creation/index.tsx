import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { 
  FormWrapper, 
  RadioButtonPrimary,
  RadioButtonSecondary,
  TextButton, 
  StatusIcon,
  Footer
} from "./styles";

import { Label } from "@components/Label";
import { Input } from "@components/Input";
import { DateTimeInput } from "@components/DateTimeInput";
import { Button } from "@components/Button";
import { Section } from "@components/Section";

export function Creation() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isDiet, setIsDiet] = useState(false)
  const [isNotDiet, setIsNotDiet] = useState(false)

  const navigation = useNavigation()

  function handleFeedback() {
    if (isDiet === true) {
      navigation.navigate('feedback', { status: true });
    } else if (isNotDiet === true) {
      navigation.navigate('feedback', { status: false });
    } else {
      return console.log("Status is not defined");
    }
  }

  return (
    <Section
      title="New meal"
    >  
      <Input 
        label="Name"
        value={name}
        onChangeText={setName}
      />
      
      <Input
        label="Description" 
        higher 
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <FormWrapper>
        <DateTimeInput 
          mode="date"
        />

        <DateTimeInput 
          mode="time"
        />
      </FormWrapper>
      
      <Label label="Is it within the diet?"/>
      <FormWrapper>
        <RadioButtonPrimary
          activeOpacity={0.8}
          onPress={() => [setIsDiet(true), setIsNotDiet(false)]}
          type={isDiet}
        >
          <StatusIcon 
            weight="fill" 
            isDiet
          />

          <TextButton>
            Yes
          </TextButton>
        </RadioButtonPrimary>

        <RadioButtonSecondary
          activeOpacity={0.8}
          onPress={() => [setIsNotDiet(true), setIsDiet(false)]}
          type={isNotDiet}
        >
          <StatusIcon 
            weight="fill"
          />

          <TextButton>
            No
          </TextButton>
        </RadioButtonSecondary>
      </FormWrapper>

      <Footer>
        <Button 
          title="Register meal"
          onPress={() => handleFeedback()}
        />
      </Footer>
    </Section>
  )
}