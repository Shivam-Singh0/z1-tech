import { CiSearch } from "react-icons/ci";
import { Button, Form, InputGroup} from 'react-bootstrap'
import { useState } from "react";

import MoviesCard from "../MoviesCard";
import { IoChevronBack } from "react-icons/io5";
import { useSearchMoviesMutation, } from "../../redux/Apis/MoviesApi";


const Home = () => {
    const [query, setQuery] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [searchJokes, {data, isLoading, isfetching}] = useSearchMoviesMutation()

    if(!isLoading){
      console.log(data)
    }
    
    const searchHandler = (e) => {
       
        e.preventDefault();
        setShowSearch(true)
        searchJokes({query}).unwrap();
        
      
    
        console.log(query)
    }

    if (isLoading || isfetching) {
        return <div>Loading....</div>
    }

   

    if (!isLoading && data && showSearch) {
        return (
           <div className="container mb-5">
            <Button className="mb-2" variant="light" onClick={() => setShowSearch(false)}><IoChevronBack size={25} /></Button>
             <div className="d-flex flex-wrap gap-3">
              
            <MoviesCard id={data.imdbID} Title={data.Title} Poster={data.Poster} Year={data.Year} />
            </div>
            <div className="d-flex justify-content-center gap-3 mt-3">
            <Button  disabled={data.current_page === 1} onClick={() => searchJokes({query: data.search_term, page: data.previous_page})}>Previous</Button><Button disabled={data.current_page === data.total_pages } onClick={() => searchJokes({query: data.search_term, page: data.next_page})}>Next</Button>
            </div>
           </div>
        )   
    }
  
    

  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 '>
        <InputGroup className="mb-3 shadow rounded"  style={{width: '50%'}}>
        <Form.Control
          placeholder="Search for a joke...."
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