import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Router from "./src/navigation/rootSwitch"

const App: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

export default App