import React, { useState } from "react";

const useSearch = (setSearch: React.Dispatch<React.SetStateAction<string>>) => {
  const [input, setInput] = useState("");
  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setSearch(input);
  };
  return [{ setInput, handleSearch }];
};

export default useSearch;
