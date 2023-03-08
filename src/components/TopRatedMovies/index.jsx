import React, {useEffect, useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Gradient } from '../Hero/HeroElements';
import { CardHolder, ButtonContainer, Card2, Title2 } from '../PopularMovies/PopMoviesElements';
import { TopMoviesContainer } from './TopRatedMovElements';

const TopMovies = () => {
    const [topMovies, setTopMovies] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(() => {
        getTopMovies();
    }, [page])

    const handleClick = () => {
        setPage(page + 1);
        console.log('next');
    }

    const getTopMovies = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US&page=${page}`);
        const data = await api.json();
        console.log(data);
        setTopMovies(prevMovies => {
            return [...new Set([...prevMovies, ...data.results])]
        });
    }
  return (
    <TopMoviesContainer>
        <CardHolder>
            {topMovies.map((movie) => {
                return (
                    <Card2 key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                            <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                            <Title2> 
                                <p>{movie.title}</p>
                             </Title2>
                            <Gradient />
                        </Link>
                        
                    </Card2>
                )
            })}
        </CardHolder>
        <ButtonContainer onClick={handleClick}>Load More</ButtonContainer>
    </TopMoviesContainer>
  )
}

export default TopMovies;