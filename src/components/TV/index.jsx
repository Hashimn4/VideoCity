import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import { Container, Image, Content, Cast, CastContainer, Box, ReviewContainer, Review, SimilarContainer, Rating, Title, Runtime, FlexContainer, ReleaseYear, Body, Gradient2 } from '../Movie/Elements';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Card } from '../Hero/HeroElements';
import { Gradient } from '../Hero/HeroElements';
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FreeMode, Navigation, Pagination} from 'swiper';
import "swiper/css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TvShow = () => {
    let params = useParams();
    const [showDetails, setShowDetails] = useState({});
    const [showCast, setShowCast] = useState([]);
    const [showReviews, setShowReviews] = useState([]);
    const [similarShows, setSimilarShows] = useState([]);
    const [runtime,setRuntime] = useState([]);

    useEffect(() => {
        getShow();
        getCast();
        getShowReview();
        getSimilarShow();
    }, [params.id])

    const getShow = async() => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data);
        setShowDetails(data);
        setRuntime(data.episode_run_time);
    }

    const getCast = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data);
        setShowCast(data.cast);
    }

    const getShowReview = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/reviews?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US`);
        const data = await api.json();
        console.log(data.results);
        setShowReviews(data.results);
    }

    const getSimilarShow = async () => {
        const api = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=dd5b8d703a820cfdadbb383be2ab5aae`);
        const data = await api.json();
        console.log(data);
        setSimilarShows(data.results);
    }

  return (
    <Body>
        <Container>
        <Box>
            <Image>
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original/${showDetails.backdrop_path}`} alt={showDetails.name} />
                <Gradient2 />
            </Image>
            <Content>
                <Title>
                    <p>{showDetails.name}</p>
                </Title>
                <FlexContainer>
                    <Runtime>
                        <p>{runtime[0] + "m"}</p>
                    </Runtime>
                    <Rating>
                        <FaStar />
                        <p>{showDetails.vote_average?.toFixed(1)}</p>
                    </Rating>
                    <ReleaseYear>
                        <p>{showDetails.first_air_date?.substring(0, 4)}</p>
                    </ReleaseYear>
                </FlexContainer>
                
                <p>{showDetails.overview}</p>
                
            </Content>
            
        </Box>
        <CastContainer>
            <Title>
                <p>Cast</p>
            </Title>
            <Swiper freeMode={true} navigation={true} modules={[FreeMode, Navigation]} spaceBetween={10} slidesPerView={1.75} breakpoints={{600: {slidesPerView: 3, spaceBetween: 10}, 800 : {slidesPerView: 4, spaceBetween: 10}, 1000: {slidesPerView: 5, spaceBetween: 10}}}>
                {showCast.map((c) => {
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
                {showReviews.map((review) => {
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
                <p>Shows Like This</p>
            </Title>
            <Swiper navigation={true} freeMode={true} modules={[Navigation, FreeMode]} slidesPerView={1.5} spaceBetween={10} breakpoints={{600: {slidesPerView: 2.5}, 800: {slidesPerView: 3.5}, 1000: {slidesPerView: 4.5}}}>
                {similarShows.map((show) => {
                    return (
                        <SwiperSlide key={show.id}>
                            <Card>
                                <Link to={`/tv/${show.id}`} style={{textDecoration: 'none'}}>
                                    <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`} alt={show.title} />
                                    <p>{show.name}</p>
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

export default TvShow;