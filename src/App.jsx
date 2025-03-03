import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Pages/Home"



function App() {
  

  return (
    <Router>
       
      
      <main>
   
     
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
   
   </main>
   </Router>
  )
}

export default App
