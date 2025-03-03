import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMovieDetailMutation } from '../../redux/Apis/MoviesApi'
import { Card, Image } from 'react-bootstrap'

const MoviePage = () => {
    const {id} = useParams()
    const [getDetail, {data, isLoading}] = useMovieDetailMutation()
    console.log(id)
    useEffect(() => {
        if(id) {
            getDetail({id})
        }
    }, [id])

    if(isLoading) {
        return <h1 className='text-center'>Loading...</h1>
    }

   if (!isLoading) {
    console.log(data)
   }

  return (
    <div className='container p-5'>
        <div className='d-flex'>
            <Image src={data?.Poster} />
            <div>
            <Card className='p-2 border-0'>
                <h1>{data?.Title}</h1>
                <p>{data?.Plot}</p>
                <h3>Year: {data?.Year}</h3>
                <h3>Actors: {data?.Actors}</h3>
            </Card>
        </div>
        </div>
        
    </div>
  )
}

export default MoviePage