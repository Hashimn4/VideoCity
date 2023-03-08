import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import { Container, Image, Content, Cast, CastContainer, Box, ReviewContainer, Review, SimilarContainer, Rating, Title, Runtime, FlexContainer, ReleaseYear, Body, Gradient2 } from './Elements';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Card } from '../Hero/HeroElements';
import { Gradient } from '../Hero/HeroElements';
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FreeMode, Scrollbar, Navigation, Pagination} from 'swiper';
import "swiper/css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Movie = () => {
    let params = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    const [movieReviews, setMovieReviews] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(() => {
        getMovie();
        getCast();
        getMovieReview();
        getSimilarMovie()
    }, [params.id])

    const getMovie = async() => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data);
        setMovieDetails(data);
    }

    const getCast = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data);
        setMovieCast(data.cast);
    }

    const getMovieReview = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data.results);
        setMovieReviews(data.results);
    }

    const getSimilarMovie = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=dd5b8d703a820cfdadbb383be2ab5aae`);
        const data = await api.json();
        console.log(data);
        setSimilarMovies(data.results);
    }

  return (
    <Body>
        <Container>
        <Box>
            <Image>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`} alt={movieDetails.title} />
                <Gradient2 />
            </Image>
            <Content>
                <Title>
                    <p>{movieDetails.title}</p>
                </Title>
                <FlexContainer>
                    <Runtime>
                        <p>{Math.floor(movieDetails.runtime/60) + "h " + movieDetails.runtime%60 + "m"}</p>
                    </Runtime>
                    <Rating>
                        <FaStar />
                        <p>{movieDetails.vote_average?.toFixed(1)}</p>
                    </Rating>
                    <ReleaseYear>
                        <p>{movieDetails.release_date?.substring(0, 4)}</p>
                    </ReleaseYear>
                </FlexContainer>
                
                <p>{movieDetails.overview}</p>
                
            </Content>
            
        </Box>
        <CastContainer>
            <Title>
                <p>Cast</p>
            </Title>
            <Swiper freeMode={true} navigation={true} modules={[FreeMode, Navigation]} spaceBetween={10} slidesPerView={1.75} breakpoints={{600: {slidesPerView: 3, spaceBetween: 10}, 800 : {slidesPerView: 4, spaceBetween: 10}, 1000: {slidesPerView: 5, spaceBetween: 10}}}>
                {movieCast.map((c) => {
                    return (
                        
                        <SwiperSlide key={c.id}>
                             
                            <Cast>
                                
                                <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${c.profile_path}`} alt={c.name} />
                                <p>{c.name}</p>
                                <Gradient />                          
                            </Cast>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </CastContainer>
        <ReviewContainer>
            <Title>
                <p>Reviews</p>
            </Title>
            <Swiper pagination={true} modules={[Pagination]} slidesPerView={1}>
                {movieReviews.map((review) => {
                    return (
                        <SwiperSlide>
                            <Review>
                                <p>{review.author}</p>
                                <p>{review.author_details.rating + " / 10"}</p>
                                <p dangerouslySetInnerHTML={{__html: review.content}}></p>
                            </Review>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </ReviewContainer>
        <SimilarContainer>
            <Title>
                <p>Movies Like This</p>
            </Title>
            <Swiper navigation={true} freeMode={true} modules={[Navigation, FreeMode]} slidesPerView={1.5} spaceBetween={10} breakpoints={{600: {slidesPerView: 2.5}, 800: {slidesPerView: 3.5}, 1000: {slidesPerView: 4.5}}}>
                {similarMovies.map((movie) => {
                    return (
                        <SwiperSlide key={movie.id}>
                            <Card>
                                <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none'}}>
                                    <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
                                    <p>{movie.title}</p>
                                    <Gradient />
                                </Link>
                            </Card>
                            
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </SimilarContainer>    
    </Container>
    </Body>
    
  )
}

export default Movie;