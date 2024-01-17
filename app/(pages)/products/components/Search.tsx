"use client";
import search from "@/public/search-svgrepo-com.svg";
import { Product } from "@/types/Product";
import Image from "next/image";
import React, { useState } from "react";
import SearchModal from "./SearchModal";

interface SearchProps {
  products: Product[];
}

const Search = ({ products }: SearchProps) => {
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
      <button className="p-2 rounded-full bg-sand" onClick={handleOpenSearch}>
        <Image src={search} alt="Search icon" className="w-6 h-6" />
      </button>
      <SearchModal
        products={products}
        searchTerm={serachTerm}
        onSearch={handleSearch}
        onClose={handleCloseSearch}
        visible={openSearch}
      />
    </div>
  );
};

export default Search;
