import { useState, useCallback } from "react"
import { FlatList } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native"

import { ArrowUpRight, Plus } from "phosphor-react-native"

import { 
  Container, 
  Header, 
  Logo, 
  Photo, 
  UserPicture, 
  Percent, 
  ListTitle, 
  Date, 
  IconWrapper
} from "./styles"

import logo from "../../assets/logo.png"

import { mealsGetAll } from "@storage/meal/mealsGetAll"
import { groupMealsByDate } from "@storage/meal/groupMealsByDate"

import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"
import { Button } from "@components/Button"
import { MealCard } from "@components/MealCard"
import { ListEmpty } from "@components/ListEmpty"

export function Home() {
  const [groupedMeals, setGroupedMeals] = useState<TransformedMeal[]>([]);

  const navigation = useNavigation()

  function handleStatistics() {
    navigation.navigate('statistics')
  }

  function handleCreation() {
    navigation.navigate('creation', { meal: "" })
  }

  function handleOpenMeal(meal: Meal) {
    navigation.navigate('meal', { meal })
  }

  function transformGroupedMeals(groupedMeals: GroupedMeals) {
    return Object.keys(groupedMeals).map(date => ({
      date,
      meals: groupedMeals[date],
    }))
  }

  async function fetchMeals() {
    try {
      const data = await groupMealsByDate()
      const transformed = transformGroupedMeals(data)
      setGroupedMeals(transformed)

    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <Container>
      <Header>
        <Logo source={logo} />

        <Photo activeOpacity={0.6}>
          <UserPicture 
            source={{ uri: 'https://github.com/gabrielrabelof.png' }}
          />
        </Photo>
      </Header>

      {
        groupedMeals.length !== 0 ?

        <Percent>
          <Highlight
            title="90,86%"
            subtitle="of meals within the diet"
          />

          <IconWrapper>
            <ButtonIcon 
              icon={ <ArrowUpRight /> } 
              onPress={() => handleStatistics()}
            />
          </IconWrapper>
        </Percent>
        
        : null
      }

      <ListTitle>
        Meals
      </ListTitle>

      <Button
        title="New meal"
        icon={ <Plus /> }
        onPress={() => handleCreation()}
      />

      <FlatList
        data={groupedMeals}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <>
            <Date>{item.date}</Date>

            {item.meals.map(meal => (
              <MealCard
                key={`${item.date}-${meal.id}`}
                time={meal.time}
                name={meal.name}
                status={meal.status}
                onPress={() => handleOpenMeal(meal)}
              />
            ))}
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={groupedMeals.length === 0 ? { flex: 1 } : { paddingVertical: 36, gap: 32 }}
        ListEmptyComponent={
          <ListEmpty message="You don't have any meals recorded yet." />
        }
      />
      
    </Container>
  )
}