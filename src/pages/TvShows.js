import TvShow from "../components/TV";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

const TvShows = ({searching, isClicked, isOpen, toggle}) => {
    return (
        <>
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <TvShow />
        </>
    )
}

export default TvShows;