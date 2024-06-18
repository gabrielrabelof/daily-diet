import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { 
  LabelWrapper,
  FormWrapper, 
  RadioButtonPrimary,
  RadioButtonSecondary,
  TextButton, 
  StatusIcon,
  Footer,
} from "./styles";

import { mealCreate } from "@storage/meal/mealCreate";
import { mealEdit } from "@storage/meal/mealEdit";

import { Label } from "@components/Label";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Section } from "@components/Section";

export type screenMode = 'CREATE' | 'EDIT'

type RouteParams = {
  meal: Meal
}

export function Creation() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [isDiet, setIsDiet] = useState(false)
  const [isNotDiet, setIsNotDiet] = useState(false)
  const [mode, setMode] = useState<screenMode>('CREATE')

  const navigation = useNavigation()

  const route = useRoute()
  const { meal } = route.params as RouteParams

  async function handleFeedback(mode: screenMode) {
    const newMeal: Meal = {
      id: Date.now(),  
      name,
      description,
      date,
      time,
      status: isDiet,  
    }
    
    if (isDiet === true || isNotDiet === true) {
      try {
        mode === 'CREATE' ? await mealCreate(newMeal) : await mealEdit(meal, newMeal)

        navigation.navigate('feedback', { status: isDiet })
      } catch (error) {
        
      }
    } else {
      console.log("Status is not defined")
    }
  }

  useEffect(() => {
    setName(meal.name)
    setDescription(meal.description)
    setDate(meal.date)
    setTime(meal.time)
    
    if (meal.status === true) {
      setIsDiet(true)
      setIsNotDiet(false)

      setMode('EDIT')
    } else if (meal.status === false) {
      setIsNotDiet(true)
      setIsDiet(false)

      setMode('EDIT')
    } else {
      setIsDiet(false)
      setIsNotDiet(false)

      setMode('CREATE')
    }
  }, [])

  return (
    <Section
      title={mode === 'CREATE' ? "New meal" : "Edit meal"}
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

      <LabelWrapper>
        <Label label="Date" />

        <Label label="Time" />
      </LabelWrapper>

      <FormWrapper>
        <Input
          halfWidth
          keyboardType="decimal-pad"
          value={date}
          onChangeText={setDate}
          maxLength={8}
        />

        <Input 
          halfWidth
          value={time}
          onChangeText={setTime}
          autoCorrect={false}
          maxLength={8}
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
          title={mode === 'CREATE' ? "Register meal" : "Save changes"}
          onPress={() => handleFeedback(mode)}
        />
      </Footer>
    </Section>
  )
}