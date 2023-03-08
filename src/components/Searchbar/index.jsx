import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContainer, SearchButton, SearchForm, CloseButton } from './SearchbarElements'
import {RxCross1} from 'react-icons/rx';

export const Searchbar = ({isClicked, searching}) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //e.preventDefault();
    // if(searchInput === "") {
    //   navigate('/contactus');
    // }
    navigate("/search/multi/" + searchInput);
    setSearchInput("");
  }
  return (
    <SearchContainer isClicked={isClicked}>
       
        <SearchForm onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder={"Search..."} 
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}/>

        <CloseButton onClick={searching}>
          <RxCross1 />
        </CloseButton>
            
        </SearchForm>
        
    </SearchContainer>
  )
}

export default Searchbar;