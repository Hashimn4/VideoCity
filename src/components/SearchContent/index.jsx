import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ButtonContainer, CardHolder, Card2, Title2 } from '../PopularMovies/PopMoviesElements';
import { SearchContainer } from './SearchedElements';
import { Gradient } from '../Hero/HeroElements';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const SearchContent = () => {
    let params = useParams();
    const [searched, setSearched] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getSearched(params.input);
    },[params.input]);


    const getSearched = async (name) => {
        const api = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=dd5b8d703a820cfdadbb383be2ab5aae&query=${name}&page=${page}`);
        const data = await api.json();
        console.log(data);
        setSearched(prevSearched => {
            return [...new Set([...prevSearched, ...data.results])];
        });
    }

    const handleClick = () => {
        setPage(page + 1);
    } 

  return (
    <SearchContainer>
        <CardHolder>
            {searched.map((query) => {
                return (
                    <Card2 key={query.id}>
                        <Link to={query.original_name ? `/tv/${query.id}` : `/movie/${query.id}`}>
                            <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${query.poster_path}`} alt={query.name || query.title} />
                       
                            <Title2><p>{query.title || query.name}</p></Title2>
                            <Gradient />
                        </Link>
                        
                    </Card2>
                    
                )
            })}
        </CardHolder>
        
    </SearchContainer>
  )
}

export default SearchContent;