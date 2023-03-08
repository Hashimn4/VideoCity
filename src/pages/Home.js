import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import Hero from '../components/Hero';

const Home = ({toggle, searching, isClicked, isOpen}) => {
  return (
    <>
        <Searchbar searching={searching} isClicked={isClicked}/>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Navbar toggle={toggle} searching={searching}/>
        <Hero />
    </>
  )
}

export default Home;