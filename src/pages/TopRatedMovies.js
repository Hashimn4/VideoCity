import Navbar from "../components/Navbar";
import TopMovies from "../components/TopRatedMovies";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

const TopRatedMovies = ({searching, toggle, isOpen, isClicked}) => {
  return (
    <>
        <Searchbar searching={searching} isClicked={isClicked}/>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Navbar toggle={toggle} searching={searching}/>
        <TopMovies />
    </>
  )
}

export default TopRatedMovies;