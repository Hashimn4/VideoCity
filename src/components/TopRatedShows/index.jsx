import React, {useState, useEffect} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Gradient } from '../Hero/HeroElements';
import { CardHolder, ButtonContainer, Card2, Title2 } from '../PopularMovies/PopMoviesElements';
import { TopRatedShowsContainer } from './TopRatedShowsElements';

const TopRatedShows = () => {
    const [topShows, setTopShows] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(() => {
        getTopShows();
    }, [page])

    const handleClick = () => {
        setPage(page + 1);
        console.log('next');
    }

    const getTopShows = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US&page=${page}`);
        const data = await api.json();
        console.log(data);
        setTopShows(prevShows => {
            return [...new Set([...prevShows, ...data.results])]
        });
    }
  return (
    <TopRatedShowsContainer>
        <CardHolder>
            {topShows.map((show) => {
                return (
                    <Card2>
                        <Link to={`/tv/${show.id}`}>
                            <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`} alt={show.name}/>
                            <Title2>{show.name}</Title2>
                            <Gradient />
                        </Link>
                    </Card2>
                )
            })}
        </CardHolder>
        <ButtonContainer onClick={handleClick}>Load More</ButtonContainer>
    </TopRatedShowsContainer>
  )
}

export default TopRatedShows;