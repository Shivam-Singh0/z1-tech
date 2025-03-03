import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Pages/Home"
import MoviePage from "./component/Pages/MoviePage";



function App() {
  

  return (
    <Router>
       
      
      <main>
   
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = {":id"} element={<MoviePage />} />
       
      </Routes>
   
   </main>
   </Router>
  )
}

export default App
