import Navbar from "./components/navbar"
import MainSection from "./components/mainSection"
import Card from "./components/card"
import data from "./data"
function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <MainSection />
      <section className="cards-list">
                {cards}
      </section>
    </>

  )
}

export default App
