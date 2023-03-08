import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Gradient } from '../Hero/HeroElements';
import { PopularContainer, CardHolder, ButtonContainer, Card2, Title2 } from './PopMoviesElements';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PopularMovies = () => {
    const [popMovies, setPopMovies] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(() => {
        getPopMovies();
    }, [page]);

    const handleClick = () => {
        setPage(page + 1);
        console.log('next');
    }

    const getPopMovies = async () => {
            const api = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US&page=${page}`);
            const data = await api.json();
            console.log(data);
            setPopMovies(prevMovies => {
                return [...new Set([...prevMovies, ...data.results])]
            });
    }
        
  return (
    <PopularContainer>
        <CardHolder>
        {popMovies.map((movie) => {
            return (
                <Card2 key={movie.id + Math.random() + 1000000}>
                    <Link to={`/movie/${movie.id}`}>
                  
                        <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
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
    </PopularContainer>
  )
}

export default PopularMovies;