import React from "react";
import { SearchPortal } from "./SearchPortal";
import { useGetBreeds } from "../hooks/useGetBreeds";
import "./SearchHeader.scss";
import { BreedSearcher } from "../models/BreedSearcher.model";
import { Searcher } from "./Searcher";
import { TopCats } from "./TopCats";

export const SearchHeader = () => {
  const [isSearchMobileOpen, setIsSearchMobileOpen] = React.useState(false);
  const { breeds } = useGetBreeds();

  const onSelectBreed = (breed: BreedSearcher) => {
    console.log(breed);
  };

  return (
    <>
      <SearchPortal
        isSearchOpen={isSearchMobileOpen}
        breeds={breeds}
        onSelectBreed={onSelectBreed}
        setIsSearchMobileOpen={setIsSearchMobileOpen}
      />
      <header className="header">
        <h2 className="header__title">CatWiki</h2>
        <p className="header__text">Get to know more about your cat breed</p>
        <div className="search">
          <Searcher breeds={breeds} onSelectBreed={onSelectBreed} />
        </div>
        <div
          className="search-mobile"
          onClick={() => setIsSearchMobileOpen(true)}
        >
          <span className="search-mobile__text">Search</span>
          <span className="material-symbols-outlined search-mobile__icon">
            search
          </span>
        </div>
      </header>
      <TopCats />
    </>
  );
};
