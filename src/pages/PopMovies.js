import Navbar from "../components/Navbar";
import PopularMovies from "../components/PopularMovies";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

const PopMovies = ({searching, toggle, isClicked, isOpen}) => {
    return (
        <> 
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <PopularMovies />
        </>
        
    )
}

export default PopMovies;