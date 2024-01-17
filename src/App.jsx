import './App.css'
import { Topbar_Component } from './Components/Topbar_Component'
import { Section03 } from './Components/Section03'
import { Caurosel_Component } from './Components/Caurosel_Component'
import { Section05 } from './Components/Section05'
import { Card_Component } from './Components/Card_Component'
import { Products } from './Components/Product'



function App() {
  
  return (
    <>
      <Topbar_Component /> 
      <Section03 />
      <Caurosel_Component />
      <Section05 />
      {/* <Card_Component /> */}
      <Products />

   </>
  )
}

export default App
