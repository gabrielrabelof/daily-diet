import { useState } from "react"
import { FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"

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

import { Highlight } from "@components/Highlight"
import { ButtonIcon } from "@components/ButtonIcon"
import { Button } from "@components/Button"
import { MealCard } from "@components/MealCard"
import { ListEmpty } from "@components/ListEmpty"

interface Meals {
  id: number[];
  name: string[];
  description: string[];
  time: string[];
  status: boolean[];
}

interface DailyMeal {
  id: number;
  date: string;
  meals: Meals;
}

export function Home() {
  const [dailyMeals, setDailyMeals] = useState<DailyMeal[]>([
    {
      id: 1, 
      date: '13.06.24', 
      meals: {
        id: [1],
        name: ['Hamburguer'],
        description: ['A delicious Hamburguer.'],
        time: ['08:00'],
        status: [false]
      }
    },
    {
      id: 2, 
      date: '14.06.24', 
      meals: {
        id: [1],
        name: ['Salad'],
        description: ['A delicious Salad.'],
        time: ['08:00'],
        status: [true]
      }
    }    
  ])

  const navigation = useNavigation()

  function handleStatistics() {
    navigation.navigate('statistics')
  }

  function handleCreation() {
    navigation.navigate('creation')
  }

  function handleMeal() {
    navigation.navigate('meal')
  }

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
        dailyMeals.length !== 0 ?

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
        data={dailyMeals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Date>{item.date}</Date>
            
            {item.meals.name.map((mealName, index) => (
              <MealCard 
                key={index} 
                time={item.meals.time[index]}
                name={mealName}
                status={item.meals.status[index]}
                onPress={() => handleMeal()}
              />
            ))}
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={dailyMeals.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty
            message="You don't have any meals recorded yet."
          />
        }
        style={{marginTop: 12}}
      />
      
    </Container>
  )
}