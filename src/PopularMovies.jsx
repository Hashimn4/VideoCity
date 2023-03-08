import React, {useState} from 'react'

const PopularMovies = () => {
    const [popMovies, setPopMovies] = useState([]);

    async function getPopularMovies() {
        const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US&page=1');
        const data = await api.json();
        setPopMovies(data.results);
        
        
    }
  return (
    <div>PopularMovies</div>
  )
}

export default PopularMovies