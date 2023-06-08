import React from "react"
import Router from "./src/navigation/rootSwitch"
import store from "./src/redux/store"
import { Provider } from "react-redux"

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App