import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { ArrowLeft } from "phosphor-react-native";

import { Container, Header, Content, IconWrapper, Title, DataWrapper } from "./styles";

import { mealsGetAll } from "@storage/meal/mealsGetAll";

import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import { Data } from "@components/Data";

type RouteParams = {
  percent: number
}

export function Statistics() {
  const [storage, setStorage] = useState<Meal[]>([])
  const [bestSequence, setBestSequence] = useState<number>(0)
  const [mealsRegistered, setMealsRegistered] = useState<number>(0)
  const [mealsIsDiet, setMealsIsDiet] = useState<number>(0)
  const [mealsIsNotDiet, setMealsIsNotDiet] = useState<number>(0)

  const navigation = useNavigation()

  const route = useRoute()
  const { percent } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('home')
  }

  function calculateStatistics(meals: Meal[]) {
    let bestSeq = 0
    let currentSeq = 0
    let dietCount = 0
    let nonDietCount = 0

    meals.forEach(meal => {
      if (meal.status) {
        dietCount += 1
        currentSeq += 1
        if (currentSeq > bestSeq) {
          bestSeq = currentSeq
        }
      } else {
        nonDietCount += 1
        currentSeq = 0
      }
    })

    setBestSequence(bestSeq)
    setMealsRegistered(meals.length)
    setMealsIsDiet(dietCount)
    setMealsIsNotDiet(nonDietCount)
  }

  async function fetchMeals() {
    const storedMeals = await mealsGetAll()
    setStorage(storedMeals)
    calculateStatistics(storedMeals)
  }

  useEffect(() => {
    fetchMeals()
  }, [])

  return (
    <Container type={percent >= 50 ? 'PRIMARY' : 'SECONDARY'}>
      <Header type={percent >= 50 ? 'PRIMARY' : 'SECONDARY'}>
        <IconWrapper>
          <ButtonIcon 
            icon={<ArrowLeft />}
            type={percent >= 50 ? 'PRIMARY' : 'SECONDARY'}
            onPress={() => handleGoBack()}
          />
        </IconWrapper>

        <Highlight
          title={`${percent.toFixed(2)}%`}
          subtitle="of meals within the diet"
        />
      </Header>

      <Content>
        <Title>
          General Statistics  
        </Title>  

        <ScrollView 
          showsVerticalScrollIndicator={false}
        >   
          <Data 
            title={bestSequence}
            subtitle="Best sequence of meals within the diet"
          />

          <Data 
            title={mealsRegistered}
            subtitle="Meals registered"
          />

          <DataWrapper>
            <Data 
              title={mealsIsDiet}
              subtitle="Meals within the diet"
              halfWidth
              type="PRIMARY"
            />

            <Data 
              title={mealsIsNotDiet}
              subtitle="Meals outside the diet"
              halfWidth
              type="SECONDARY"
            />
          </DataWrapper>               
        </ScrollView>
      </Content>
    </Container>
  )
}
