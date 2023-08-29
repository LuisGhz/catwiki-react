import React from "react";
import { BreedSearcher } from "../models/BreedSearcher.model";
import "./SearchMobile.css";

type SearchMobileProps = {
  setIsSearchMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  breeds: BreedSearcher[] | undefined;
  onSelectBreed: (breed: BreedSearcher) => void;
};

export const SearchMobile = ({ setIsSearchMobileOpen, breeds, onSelectBreed }: SearchMobileProps) => {
  const [findedBreeds, setFindedBreeds] = React.useState<BreedSearcher[]>([]);

  const searchBreeds = (breed: string) => {
    if (breed.trim() === "") {
      setFindedBreeds([]);
      return;
    }
    const findedBreedsTemp = breeds?.filter((breedSearcher) =>
      breedSearcher.name.toLowerCase().startsWith(breed.toLowerCase())
    );
    setFindedBreeds(findedBreedsTemp || []);
  };

  return (
    <main className="search-modal">
      <button className="search-modal__close-button" type="button">
        <span
          className="material-symbols-outlined"
          onClick={() => setIsSearchMobileOpen(false)}
        >
          close
        </span>
      </button>
      <section className="search-input">
        <input
          className="search-input__input"
          type="text"
          name="search"
          id="search"
          data-testid="search-input"
          onChange={(e) => searchBreeds(e.target.value)}
        />
        <span className="search-input__icon material-symbols-outlined">
          search
        </span>
      </section>
      <ul className="search-results">
        {findedBreeds.map((breed) => (
          <li className="search-results__item" key={breed.id} data-testid="result-item" onClick={() => {
            onSelectBreed(breed);
            setIsSearchMobileOpen(false);
          }}>
            {breed.name}
          </li>
        ))}
      </ul>
    </main>
  );
};
