import { useNavigation, useRoute } from "@react-navigation/native";

import { ArrowLeft } from "phosphor-react-native";

import { Container, Header, Content, IconWrapper, Title, DataWrapper } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import { Data } from "@components/Data";
import { ScrollView } from "react-native";

type RouteParams = {
  percent: number
}

export function Statistics() {
  const navigation = useNavigation()

  const route = useRoute()
  const { percent } = route.params as RouteParams

  function handleGoBack() {
    navigation.navigate('home')
  }

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
            title="22"
            subtitle="Best sequence of meals within the diet"
          />

          <Data 
            title="109"
            subtitle="Meals registered"
          />

          <DataWrapper>
            <Data 
              title="99"
              subtitle="Meals within the diet"
              halfWidth
              type="PRIMARY"
            />

            <Data 
              title="10"
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