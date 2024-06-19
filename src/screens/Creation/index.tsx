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

import { AppError } from "@utils/AppError";

import { Label } from "@components/Label";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Section } from "@components/Section";
import { Modal } from "@components/Modal";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const navigation = useNavigation()

  const route = useRoute()
  const { meal } = route.params as RouteParams

  function closeModal() {
    setModalVisible(false);
  }

  async function handleFeedback(mode: screenMode) {
    if (!name || !date || !time || !isDiet && !isNotDiet) {
      setModalMessage("Please fill in all the required fields.")
      setModalVisible(true)
      return
    }

    const newMeal: Meal = {
      id: Date.now(),  
      name,
      description,
      date,
      time,
      status: isDiet,  
    }
    
    try {
      mode === 'CREATE' ? await mealCreate(newMeal) : await mealEdit(meal, newMeal)
      navigation.navigate('feedback', { status: isDiet })
    } catch (error) {
      if (error instanceof AppError) {
        setModalMessage(`${error.message}`)
      } else {
        console.log(error)
        setModalMessage("Unable to create a new meal.")
      }
      setModalVisible(true)
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

      <Modal 
        type="ALERT"
        visible={modalVisible}
        message={modalMessage}
        onClose={closeModal}
      />
    </Section>
  )
}