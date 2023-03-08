import Contact from "../components/Contact/Contact";
import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

const ContactUs = ({toggle, isOpen, isClicked, searching}) => {
    return (
        <>
            <Searchbar searching={searching} isClicked={isClicked}/>
            <Sidebar toggle={toggle} isOpen={isOpen}/>
            <Navbar toggle={toggle} searching={searching}/>
            <Contact />
        </>
        
    )
}

export default ContactUs;