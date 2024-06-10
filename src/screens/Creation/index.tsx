import { useState } from "react";

import { 
  RadioButtonTypeStyleProps,
  Container, 
  Header, 
  ButtonIcon, 
  Title, 
  Content,
  FormWrapper,
  HeaderIcon,  
  RadioButton,
  TextButton, 
  StatusIcon,
  Footer
} from "./styles";

import { Label } from "@components/Label";
import { Input } from "@components/Input";
import { DateTimeInput } from "@components/DateTimeInput";
import { Button } from "@components/Button";

export function Creation() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isDiet, setIsDiet] = useState<RadioButtonTypeStyleProps>("STANDART")
  const [isNotDiet, setIsNotDiet] = useState<RadioButtonTypeStyleProps>("STANDART")

  return (
    <Container>
      <Header>
        <ButtonIcon>
          <HeaderIcon />
        </ButtonIcon>

        <Title>
          New Meal
        </Title>
      </Header>

      <Content>
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
          <RadioButton
            activeOpacity={0.8}
            onPress={() => [setIsDiet("PRIMARY"), setIsNotDiet("STANDART")]}
            type={isDiet}
          >
            <StatusIcon 
              weight="fill" 
              isDiet
            />

            <TextButton>
              Yes
            </TextButton>
          </RadioButton>

          <RadioButton
            activeOpacity={0.8}
            onPress={() => [setIsNotDiet("SECONDARY"), setIsDiet("STANDART")]}
            type={isNotDiet}
          >
            <StatusIcon 
              weight="fill"
            />

            <TextButton>
              No
            </TextButton>
          </RadioButton>
        </FormWrapper>

        <Footer>
          <Button 
            title="Register meal"
          />
        </Footer>

      </Content>
    </Container>
  )
}