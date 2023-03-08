import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import TopRatedShows from "../components/TopRatedShows";

const TopRatedTVShows = ({searching, isClicked, toggle, isOpen}) => {
    return (
        <>
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <TopRatedShows />
        </>
      )
}

export default TopRatedTVShows;