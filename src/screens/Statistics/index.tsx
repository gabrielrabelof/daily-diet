import { ArrowLeft } from "phosphor-react-native";

import { Container, Header, Content, IconWrapper, Title, DataWrapper } from "./styles";

import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import { Data } from "@components/Data";
import { ScrollView } from "react-native";

export function Statistics() {
  return (
    <Container>
      <Header>
        <IconWrapper>
          <ButtonIcon 
            icon={<ArrowLeft />}
          />
        </IconWrapper>

        <Highlight
          title="90,86%"
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
              title="22"
              subtitle="Best sequence of meals within the diet"
              halfWidth
              type="PRIMARY"
            />

            <Data 
              title="109"
              subtitle="Meals registered"
              halfWidth
              type="SECONDARY"
            />
          </DataWrapper>               
        </ScrollView>
      </Content>
    </Container>
  )
}