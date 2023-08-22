import Link from "next/link";
import React from "react";

interface SearchModalProps {
  visible: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  products: any[];
}

const SearchModal = ({
  visible,
  onClose,
  searchTerm,
  onSearch,
  products,
}: SearchModalProps) => {
  if (!visible) return null;
  return (
    <div
      onClick={onClose}
      className="animate-fadeIn fixed inset-0 transition-opacity top-0 left-0 w-full h-[100vh] z-10 bg-[#000] bg-opacity-50 backdrop-blur-sm flex sm:items-center justify-center"
    >
      <div
        className={`sm:w-[600px] w-[100vw]  ${
          searchTerm && " bg-white "
        } sm:rounded-[32px] h-[400px] max-h-[400px]`}
      >
        <input
          value={searchTerm}
          onChange={onSearch}
          onClick={(e) => e.stopPropagation()}
          type="text"
          placeholder="Search products..."
          className="w-full border-none outline-none p-5 sm:rounded-full bg-white opacity-100 z-1000 shadow-sm"
        />
        <div className="max-h-[310px] overflow-auto modal">
          {searchTerm &&
            products.map(
              (prod) =>
                prod.name
                  .toLowerCase()
                  .includes(searchTerm.trim().toLowerCase()) && (
                  <Link href={`/products/${prod.id}`}>
                    <div
                      key={prod.id}
                      className="w-full bg-white py-4 px-4 rounded-[32px] "
                    >
                      <span className="text-lg font-semibold texct-forest block">
                        {prod.name}
                      </span>
                      <span className="text-sm font-semibold text-tree block mt-2">
                        AUS {prod.price}
                      </span>
                    </div>
                  </Link>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
