import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

const Movies = ({toggle, searching, isClicked, isOpen}) => {
    return (
        <> 
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <Movie />
        </>
        
    )
}

export default Movies;