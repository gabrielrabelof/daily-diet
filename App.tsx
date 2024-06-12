import { StatusBar } from "react-native"
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from "@expo-google-fonts/nunito-sans"

import { ThemeProvider } from "styled-components/native"

import theme from "src/theme"

import { Route } from "src/routes"

import { Loading } from "@components/Loading"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent
      />
      
      <Route />
    </ThemeProvider>
  )
}