import React from "react";
import { BreedSearcher } from "../models/BreedSearcher.model";
import "./Searcher.css";

type SearcherProps = {
  breeds: BreedSearcher[] | undefined;
  onSelectBreed: (breed: BreedSearcher) => void;
};

export const Searcher = ({ breeds, onSelectBreed }: SearcherProps) => {
  const [findedBreeds, setFindedBreeds] = React.useState<BreedSearcher[]>([]);
  const [breedsInputValue, setBreedsInputValue] = React.useState("");
  React.useEffect(() => {
    if (breedsInputValue.trim() === "") {
      setFindedBreeds([]);
      return;
    }
    const findedBreedsTemp = breeds?.filter((breedSearcher) =>
      breedSearcher.name
        .toLowerCase()
        .startsWith(breedsInputValue.toLowerCase())
    );
    setFindedBreeds(findedBreedsTemp || []);
  }, [breedsInputValue]);

  return (
    <>
      <section className="searcher-input">
        <input
          className="searcher-input__input"
          type="text"
          name="searcher"
          id="searcher"
          data-testid="searcher-input"
          value={breedsInputValue}
          onChange={(e) => setBreedsInputValue(e.target.value)}
        />
        <span className="searcher-input__icon material-symbols-outlined">
          search
        </span>
      </section>
      {findedBreeds.length > 0 && (
        <ul className="searcher-results absolute">
          {findedBreeds.map((breed) => (
            <li
              className="searcher-results__item"
              key={breed.id}
              data-testid="result-item"
              onClick={() => {
                setBreedsInputValue("");
                onSelectBreed(breed);
              }}
            >
              {breed.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
