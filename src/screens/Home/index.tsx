import { FlatList } from "react-native"
import { Plus } from "phosphor-react-native"

import { 
  Container, 
  Header, 
  Logo, 
  Photo, 
  UserPicture, 
  Percent, 
  ButtonIcon, 
  Icon, 
  ListTitle, 
  Date 
} from "./styles"

import logo from "../../assets/logo.png"

import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"

export function Home() {
  const dailyMeals = [
    { 
      date: '04.06.24', 
      meals: {
        name: ['Cheese Burguer', 'Salad', 'Meat', 'Pie'],
        description: ['A delicious burguer.', 'A delicious salad.', 'A delicious meat.', 'A delicious pie.'],
        time: ['08:00','12:00', '16:00', '22:00'],
        status: [false, true, true, false]
      }
    },

    { 
      date: '05.06.24', 
      meals: {
        name: ['Cheese Burguer', 'Salad', 'Meat', 'Pie'],
        description: ['A delicious burguer.', 'A delicious salad.', 'A delicious meat.', 'A delicious pie.'],
        time: ['08:00','12:00', '16:00', '22:00'],
        status: [false, true, true, false]
      }
    },

    { 
      date: '06.06.24', 
      meals: {
        name: ['Cheese Burguer', 'Salad', 'Meat', 'Pie'],
        description: ['A delicious burguer.', 'A delicious salad.', 'A delicious meat.', 'A delicious pie.'],
        time: ['08:00','12:00', '16:00', '22:00'],
        status: [false, true, true, false]
      }
    },
  ]

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

      <Percent>
        <Highlight
          title="90,86%"
          subtitle="of meals within the diet"
        />

        <ButtonIcon>
          <Icon />
        </ButtonIcon>
      </Percent>

      <ListTitle>
        Meals
      </ListTitle>

      <Button
        title="New meal"
        icon={ <Plus /> }
      />

      <FlatList
        data={dailyMeals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Date>{item.date}</Date>
            
            {item.meals.name.map((mealName, index) => (
              <Meal 
                key={index} 
                time={item.meals.time[index]}
                name={mealName}
                status={item.meals.status[index]}
              />
            ))}
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
      
    </Container>
  )
}