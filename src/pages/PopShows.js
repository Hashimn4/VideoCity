import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import PopularShows from "../components/PopularShows";

const PopShows = ({searching, toggle, isClicked, isOpen}) => {
    return (
        <>
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <PopularShows />
        </>
    )
}

export default PopShows;