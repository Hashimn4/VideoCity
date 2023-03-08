import React, {useState, useEffect} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Gradient } from '../Hero/HeroElements';
import { ButtonContainer, Card2, CardHolder, PopularContainer, Title2 } from '../PopularMovies/PopMoviesElements';

const PopularShows = () => {
    const [popShows, setPopShows] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(() => {
       getPopShows();
    }, [page]);

    const handleClick = () => {
        setPage(page + 1);
        console.log('next');
    }

    const getPopShows = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US&page=${page}`);
        const data = await api.json();
        console.log(data);
        setPopShows(prevShows => {
            return [...new Set([...prevShows, ...data.results])]
        });
    }

    return (
        <PopularContainer>
            <CardHolder>
                {popShows.map((show) => {
                    return (
                        <Card2 key={show.id}>
                            <Link to={`/tv/${show.id}`}>
                                <LazyLoadImage src= {`https://image.tmdb.org/t/p/w300/${show.poster_path}`} alt={show.name}/>
                                <Title2>
                                    <p>{show.name}</p>
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

export default PopularShows