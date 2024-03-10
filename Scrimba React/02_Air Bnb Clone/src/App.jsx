import Navbar from "./components/navbar"
import MainSection from "./components/mainSection"
import Card from "./components/card"
function App() {

  return (
    <>
      <Navbar />
      <MainSection />
      <Card 
        img = "./images/swimmer.png"
        title = "Life Lessons with Katie Zaferes"
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        price = {136}
      />
    </>

  )
}

export default App
