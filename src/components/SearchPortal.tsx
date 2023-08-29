import React from "react";
import { createPortal } from "react-dom";
import { BreedSearcher } from "../models/BreedSearcher.model";
import { Searcher } from "./Searcher";
import "./SearchPortal.scss";

type SearchPortalProps = {
  isSearchOpen: boolean;
  breeds: BreedSearcher[] | undefined;
  onSelectBreed: (breed: BreedSearcher) => void;
  setIsSearchMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchPortal = ({
  isSearchOpen,
  breeds,
  onSelectBreed,
  setIsSearchMobileOpen,
}: SearchPortalProps) => {
  if (!isSearchOpen) return null;

  const searchBreedsFromMobile = (breed: BreedSearcher) => {
    onSelectBreed(breed);
    setIsSearchMobileOpen(false);
  };

  return createPortal(
    <main className="search-modal">
      <button className="search-modal__close-button" type="button">
        <span
          className="material-symbols-outlined"
          onClick={() => setIsSearchMobileOpen(false)}
        >
          close
        </span>
      </button>
      <Searcher breeds={breeds} onSelectBreed={searchBreedsFromMobile} />
    </main>,
    document.getElementById("search-portal") as HTMLElement
  );
};
