import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { PencilSimpleLine, Trash } from "phosphor-react-native";

import { Name, Description, DateTime, Status, StatusIcon, StatusText, Footer } from "./styles";

import { mealRemove } from "@storage/meal/mealRemove";

import { Section } from "@components/Section";
import { Button } from "@components/Button";
import { Modal } from "@components/Modal";

type RouteParams = {
  meal: Meal
}

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()

  const route = useRoute()
  const { meal } = route.params as RouteParams

  function showModal() {
    setModalVisible(true)
  }

  function closeModal() {
    setModalVisible(false)
  }

  function handleEditMeal(meal: Meal) {
    navigation.navigate('creation', { meal })
  }

  async function handleMealRemove(meal: Meal) {
    try {
      await mealRemove(meal)
      closeModal()
      navigation.navigate('home')

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Section
      headerStyle={meal.status ? "PRIMARY" : "SECONDARY"}
      title="Meal"
    >
      <Name>
        {meal.name}
      </Name>
      <Description>
        {meal.description}
      </Description>

      <DateTime>
        Date and Time
      </DateTime>
      <Description>
        {meal.date.replace(/\./g, '/')} at {meal.time}
      </Description>
        
      <Status>
        <StatusIcon 
          weight="fill" 
          isDiet={meal.status ? true : false}
        />

        <StatusText>
          {meal.status ? "within the diet" : "outside the diet"}
        </StatusText>
      </Status>

      <Footer>
        <Button 
          icon={ <PencilSimpleLine /> }
          title="Edit meal"
          onPress={() => handleEditMeal(meal)}
        />
        <Button 
          icon={ <Trash /> }
          title="Delete meal"
          type="SECONDARY"
          onPress={showModal}
        />
      </Footer>

      <Modal
        message="Do you really want to delete the meal record?"
        visible={modalVisible}
        onClose={closeModal}
        onRemove={() => handleMealRemove(meal)}
      />
    </Section>
  )
}