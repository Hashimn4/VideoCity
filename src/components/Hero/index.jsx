import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, Pagination, FreeMode} from 'swiper';
import { Card, CardContainer, HeroContainer, Gradient} from './HeroElements';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
    const [nowMovies, setNowMovies] = useState([]);
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        getNowPlaying();
        getTrending();
    },[]);
    const getNowPlaying = async () => {
        const checkPlaying = localStorage.getItem("nowMovies");
        if(checkPlaying) {
            setNowMovies(JSON.parse(checkPlaying));
        }
        else {
            const api = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=dd5b8d703a820cfdadbb383be2ab5aae&language=en-US");
            const data = await api.json();
            localStorage.setItem("nowMovies", JSON.stringify(data.results));
            console.log(data.results);
            setNowMovies(data.results);
        }
        
    }

    const getTrending = async () => {
        const checkTrending = localStorage.getItem("trending");
        if(checkTrending) {
            setTrending(JSON.parse(checkTrending));
        }
        else {
            const api = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=dd5b8d703a820cfdadbb383be2ab5aae");
            const data = await api.json();
            localStorage.setItem("trending", JSON.stringify(data.results));
            console.log(data.results);
            setTrending(data.results);
        }
        
    }

    return (
        <HeroContainer>
            <CardContainer>
            <h1>In Theaters</h1>
            <Swiper navigation={true} freeMode={true} modules={[Navigation, FreeMode]} slidesPerView={1.5} spaceBetween={10} breakpoints={{600: {slidesPerView: 2.5, spaceBetween: 10}, 900: {slidesPerView: 3.5, spaceBetween: 10}, 1000: {slidesPerView: 4.5, spaceBetween: 10}}}>
                {nowMovies.map((movie) => {
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
            <h1>Trending</h1>
            <Swiper navigation={true} freeMode={true} modules={[Navigation, FreeMode]} spaceBetween={10} slidesPerView={1.5} breakpoints={{600: {slidesPerView: 2.5, spaceBetween: 10}, 900 : {slidesPerView: 3.5, spaceBetween: 10}, 1000: {slidesPerView: 4.5, spaceBetween: 10}}}>
                {trending.map((tmovie) => {
                    return (
                        <SwiperSlide key={tmovie.id}>
                            <Card>
                                <Link to={tmovie.original_name ? `/tv/${tmovie.id}` : `/movie/${tmovie.id}`} style={{textDecoration: 'none'}}>
                                    <LazyLoadImage src={`https://image.tmdb.org/t/p/w300/${tmovie.poster_path}`} alt="" />
                                    
                                    <p>{tmovie.title || tmovie.original_name}</p>
                                    <Gradient />
                                </Link>
                                
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </CardContainer>
            
        </HeroContainer>
  )
}

export default Hero;