import { BrowserRouter, Route, Routes } from "react-router-dom"
import Details from "./components/Details"
import PersonalDetails from "./components/PersonalDetails"
import Measurements from "./components/Measurements"
import GetData from "./components/GetData"
// import ReactQuery from "./reactQuery/ReactQuery"



const App = () => {

     
  

  return (
    <div>
      
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/personalDetails" element={<PersonalDetails />} />
        <Route path="/measurements" element = {<Measurements/>}/>
        <Route path="/getdata" element = {<GetData/>}/>
      </Routes>
      
    </BrowserRouter>
      
      {/* <ReactQuery/> */}
        
      
        
     
      
    </div>
  )
}

export default App
