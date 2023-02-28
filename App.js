import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootNavigation } from "./src/navigation";


export default function App() {
  return (
      <NavigationContainer>
          <StatusBar style="light" backgroundColor="#2C2019" translucent={true}></StatusBar>
          <RootNavigation />
      </NavigationContainer>
  )
}