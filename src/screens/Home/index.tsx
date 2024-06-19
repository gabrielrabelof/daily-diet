import { useState, useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker'

import { Plus } from "phosphor-react-native";

import { 
  Container, 
  Header, 
  Logo, 
  Photo, 
  UserPicture, 
  Percent, 
  ListTitle, 
  MealDate, 
  IconWrapper
} from "./styles";

import logo from "../../assets/logo.png";

import { groupMealsByDate } from "@storage/meal/groupMealsByDate";
import { saveImageToStorage } from "@storage/user/saveImageToStorage";
import { loadImageFromStorage } from "@storage/user/loadImageFromStorage";

import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";

export function Home() {
  const [groupedMeals, setGroupedMeals] = useState<TransformedMeal[]>([])
  const [image, setImage] = useState("../../assets/default-user-picture.png")
  const [percent, setPercent] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const defaultImage = <UserPicture source={require("../../assets/default-user-picture.png")} />

  function handleStatistics() {
    navigation.navigate('statistics', { percent })
  }

  function handleCreation() {
    navigation.navigate('creation', { meal: "" })
  }

  function handleOpenMeal(meal: Meal) {
    navigation.navigate('meal', { meal })
  }

  function transformDateString(dateStr: string): string {
    const [day, month, year] = dateStr.split('.');
    return `${year}-${month}-${day}`;
  }

  function transformGroupedMeals(groupedMeals: GroupedMeals) {
    const transformed = Object.keys(groupedMeals).map(date => ({
      date,
      meals: groupedMeals[date].sort((a, b) => a.time.localeCompare(b.time)), 
    }))

    return transformed.sort((a, b) => new Date(transformDateString(b.date)).getTime() - new Date(transformDateString(a.date)).getTime())
  }

  function calculatePercent(groupedMeals: TransformedMeal[]) {
    let totalMeals = 0
    let mealsWithinDiet = 0

    groupedMeals.forEach(group => {
      totalMeals += group.meals.length
      mealsWithinDiet += group.meals.filter(meal => meal.status === true).length
    })

    const percent = totalMeals > 0 ? (mealsWithinDiet / totalMeals) * 100 : 0
    setPercent(percent)
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      saveImageToStorage(result.assets[0].uri)
    }
  }

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const data = await groupMealsByDate()
      const transformed = transformGroupedMeals(data)

      setGroupedMeals(transformed)
      calculatePercent(transformed)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadImageFromStorage(setImage)
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMeals()

    }, [])
  )

  return (
    <Container>
      <Header>
        <Logo source={logo} />

        <Photo 
          onPress={pickImage}
          activeOpacity={0.6}
        >
          {
            image ? (
              <UserPicture source={{ uri: image }} />
            ) : (
              defaultImage
            )
          }
        </Photo>
      </Header>

      {
        groupedMeals.length !== 0 ?

        <Percent 
          type={percent >= 50 ? 'PRIMARY' : 'SECONDARY'}
          onPress={handleStatistics}
          activeOpacity={0.7}
        >
          <Highlight
            title={`${percent.toFixed(2)}%`}
            subtitle="of meals within the diet"
          />

          <IconWrapper />
          
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

      {  
        isLoading ? <Loading /> :

        <FlatList
          data={groupedMeals}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <>
              <MealDate>{item.date}</MealDate>

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
      }
      
    </Container>
  )
}
