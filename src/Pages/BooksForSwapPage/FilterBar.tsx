import {
  Paper,
  FormControl,
  Typography,
  Stack,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../data/categories";
import SearchBar from "./SearchBar";

// component belongs to BooksForSwapPage,
// include: SearchBar

interface IFilterBar {
  handleSortingChange: (event: SelectChangeEvent) => void;
  handleCategoryChange: (event: SelectChangeEvent) => void;
  handleBooksPerPageChange: (event: SelectChangeEvent) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBar = ({
  handleBooksPerPageChange,
  handleCategoryChange,
  handleSortingChange,
  setSearch,
}: IFilterBar) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "1",
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "30px",
        color: "primary.main",
      }}
    >
      {/* searching by name */}
      <Stack
        width="80%"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <SearchBar setSearch={setSearch} />
      </Stack>

      <Stack
        width="80%"
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
      >
        {/* category filter */}
        <FormControl sx={{ width: { xs: "0.8", sm: "0.15" } }}>
          <Typography marginBottom="5px">Category</Typography>
          <Select defaultValue={""} onChange={handleCategoryChange}>
            <option value=""></option>
            {categories.map<React.ReactNode>((category, index) => {
              return (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        {/* books per page  */}
        <FormControl sx={{ width: { xs: "0.8", sm: "0.15" } }}>
          <Typography marginBottom="5px">Books Per Page:</Typography>
          <Select
            defaultValue={"10"}
            id="booksPerPageChangeSelect"
            onChange={handleBooksPerPageChange}
          >
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"25"}>25</MenuItem>
            <MenuItem value={"50"}>50</MenuItem>
          </Select>
        </FormControl>

        {/* sortBy */}
        <FormControl sx={{ width: { xs: "0.8", sm: "0.15" } }}>
          <Typography marginBottom="5px">Sort by:</Typography>

          <Select defaultValue={""} onChange={handleSortingChange}>
            <MenuItem value={""}></MenuItem>
            <MenuItem value={"nameOfTheBook_+1"}>name+</MenuItem>
            <MenuItem value={"nameOfTheBook_-1"}>name-</MenuItem>
            <MenuItem value={"author_+1"}>author+</MenuItem>
            <MenuItem value={"author_-1"}>author-</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Paper>
  );
};

export default FilterBar;
