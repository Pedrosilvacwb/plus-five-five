"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import search from "../../../public/search-svgrepo-com.svg";
import SearchModal from "./SearchModal";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [serachTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const request = await fetch(`http://localhost:3000/products/`);

      const json = await request.json();
      setProducts(json);
    };

    getProducts();
  }, []);

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
        products={products}
      />
    </div>
  );
};

export default Search;
