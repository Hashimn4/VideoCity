import React, {useState} from 'react'
import Home from './pages/Home';
import PopMovies from './pages/PopMovies';
import TopRatedMovies from './pages/TopRatedMovies';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Search from './pages/Search';
import PopShows from './pages/PopShows';
import TopRatedTVShows from './pages/TopRatedShows';
import ContactUs from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  const searching = () => {
    setIsClicked(!isClicked);
  }
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>} />
        <Route path='/popularmovies' element={<PopMovies toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>} />
        <Route path='/topratedmovies' element={<TopRatedMovies toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>} />
        <Route path='/movie/:id' element={<Movies toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
        <Route path='/search/multi/:input' element={<Search toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
        <Route path='/tv/:id' element={<TvShows toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
        <Route path='/populartvshows' element={<PopShows toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
        <Route path='/topratedtvshows' element={<TopRatedTVShows toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
        <Route path='/contactus' element={<ContactUs toggle={toggle} searching={searching} isOpen={isOpen} isClicked={isClicked}/>}/>
      </Routes>
      

    </Router>

    
  )
}

export default App;