import Navbar from "../components/Navbar";
import SearchContent from "../components/SearchContent";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";

const Search = ({isClicked, isOpen, searching, toggle}) => {
    return (
        <>
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
             <Navbar toggle={toggle} searching={searching}/>
            <SearchContent />
        </>
    )
}

export default Search;