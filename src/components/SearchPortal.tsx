import React from "react";
import { createPortal } from "react-dom";
import { BreedSearcher } from "../models/BreedSearcher.model";
import { Searcher } from "./Searcher";
import "./SearchPortal.scss";

type SearchPortalProps = {
  isSearchOpen: boolean;
  breeds: BreedSearcher[] | undefined;
  setIsSearchMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchPortal = ({
  isSearchOpen,
  breeds,
  setIsSearchMobileOpen,
}: SearchPortalProps) => {
  if (!isSearchOpen) return null;

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
      <Searcher breeds={breeds} />
    </main>,
    document.getElementById("search-portal") as HTMLElement
  );
};
