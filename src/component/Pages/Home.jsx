import { CiSearch } from "react-icons/ci";
import { Button, Form, InputGroup} from 'react-bootstrap'
import { useState } from "react";

import MoviesCard from "../MoviesCard";
import { IoChevronBack } from "react-icons/io5";
import { useSearchMoviesMutation, } from "../../redux/Apis/MoviesApi";


const Home = () => {
    const [query, setQuery] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [searchMovie, {data, isLoading, isfetching}] = useSearchMoviesMutation()

   
    
    const searchHandler = (e) => {
       
        e.preventDefault();
        setShowSearch(true)
        searchMovie({query}).unwrap();
        
      
    
       
    }

    if (isLoading || isfetching) {
        return <div>Loading....</div>
    }

  

    if (!isLoading && data?.Search.length && showSearch) {
        return (
           <div className="container mb-5">
            <Button className="mb-2" variant="light" onClick={() => setShowSearch(false)}><IoChevronBack size={25} /></Button>
             <div className="d-flex flex-wrap gap-3">
              
           {data?.Search.map((movie) => (
             <MoviesCard id={movie.imdbID} Title={movie.Title} Poster={movie.Poster} Year={movie.Year} />
           ))}
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
            </div>
           </div>
        )   
    }
  
    

  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 ' style={{width: '100vw'}}>
        <InputGroup className="mb-3 shadow rounded"  style={{width: '50%'}}>
        <Form.Control
          placeholder="Search for a Movie...."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='border-0'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-secondary" className='border-0' id="button-addon2" onClick={searchHandler}>
          <CiSearch size={25}/>
        </Button>
      </InputGroup>
    </div>
    </>
  )
}

export default Home