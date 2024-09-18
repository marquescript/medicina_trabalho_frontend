import { Body } from "./components/body/Body"
import { Header } from "./components/header/Header"
import { ButtonProvider } from "./contexts/ButtonContext"


const App = () => {

  return (
    <>
    <ButtonProvider>
      <Header />
      <Body />
     </ButtonProvider>
    </>
  )
}

export default App
