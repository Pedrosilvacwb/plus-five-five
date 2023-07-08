"use client";
import Image from "next/image";
import React, { useState } from "react";
import search from "../../../public/search-svgrepo-com.svg";
import SearchModal from "./SearchModal";

const Search = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [serachTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };
  return (
    <div>
      <button onClick={handleOpenSearch}>
        <Image src={search} alt="Search icon" className="w-6 h-6" />
      </button>
      <SearchModal
        searchTerm={serachTerm}
        onSearch={handleSearch}
        onClose={handleCloseSearch}
        visible={openSearch}
      />
    </div>
  );
};

export default Search;
