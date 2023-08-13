import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type to search........"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default Search;
