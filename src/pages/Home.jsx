import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'


const Home = () => {
  const [movies, setMovies] = useState([]);
  const[page, setPage] = useState(1);
  const[search, setSearch] = useState("");

  useEffect(()=>{
    let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=b3e52401fb72620dc7fee1abb72af3e9`


    if(search){
      url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=b3e52401fb72620dc7fee1abb72af3e9`
    }

    fetch(url).then((response)=>response.json()).then((data)=>setMovies(data.results));
  },[page,search])
  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search movies...' className='border p-2 w-3/4 md:w-1/2 rounded border-gray-700 bg-gray-900/50 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-20' onChange={(e)=>setSearch(e.target.value)}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12'>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />         
        ))}        
      </div>
      <div className='pagination-container flex justify-between mt-5'>
        <button 
        disabled={page==1}
        className='p-2 bg-gray-700 text-white rounded' onClick={
          ()=>{
            setPage((prev) => prev-1);
          }
        }>PREV</button>
        <button className='p-2 bg-gray-700 text-white rounded'onClick={
          ()=>{
            setPage((prev) => prev+1);
          }
        }>NEXT</button>
      </div>
    </div>
  )
}

export default Home
