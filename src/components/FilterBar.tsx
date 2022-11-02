import {
  Paper,
  NativeSelect,
  FormControl,
  Typography,
  Stack,
  Input,
  Button,
} from "@mui/material";
import categories from "../data/categories";
import SearchBar from "./SearchBar";

const FilterBar = () => {
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
        <SearchBar />
      </Stack>
      {/* category filter */}
      <Stack
        width="80%"
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={5}
      >
        <FormControl sx={{ width: { xs: "0.6", sm: "0.15" } }}>
          <Typography marginBottom="5px">Category</Typography>
          <NativeSelect defaultValue={""}>
            <option value=""></option>
            {categories.map<React.ReactNode>((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
        {/* books per page  */}
        <FormControl sx={{ width: { xs: "0.8", sm: "0.15" } }}>
          <Typography marginBottom="5px">Books per page</Typography>

          <NativeSelect defaultValue={10}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </NativeSelect>
        </FormControl>
        {/* sortBy */}
        <FormControl sx={{ width: { xs: "0.8", sm: "0.15" } }}>
          <Typography marginBottom="5px">Sort by:</Typography>

          <NativeSelect>
            <option value={""}></option>
            <option value={"name_1"}>name+</option>
            <option value={"name_-1"}>name-</option>
            <option value={"author_1"}>author+</option>
            <option value={"author_-1"}>author-</option>
          </NativeSelect>
        </FormControl>
      </Stack>
    </Paper>
  );
};

export default FilterBar;
