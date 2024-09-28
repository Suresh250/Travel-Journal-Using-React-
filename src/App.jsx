import NavBar from "./Components/NavBar"
import DestinationCard from "./Components/DestinationCard"
import data from "./data.js"
function App() {
  const dataCard = data.map((element) =>{
    return (<DestinationCard
            key = {element.id}
            {...element}
      />
    )
  })


  return (
    <>
      <NavBar></NavBar>
      {dataCard}
    </>
  )
}

export default App
