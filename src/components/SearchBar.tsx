import { Paper, InputBase, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// component used in BooksForSwapPage, as a part of FilterBar

interface ISearchBar {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearch }: ISearchBar) => {
  const [input, setInput] = useState("");

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = () => {
    setSearch(input);
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "0.6" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for books"
        inputProps={{ "aria-label": "search for books" }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
