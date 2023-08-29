import React from "react";
import { BreedSearcher } from "../models/BreedSearcher.model";

export const useGetBreeds = () => {
  const [breeds, setBreeds] = React.useState<BreedSearcher[]>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string>("");
  const getBreeds = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/breeds");
      const data: BreedSearcher[] = await response.json();
      setBreeds(data);
      setIsLoading(false);
    } catch {
      setError("Something get wrong please try again later");
    }
  };

  React.useEffect(() => {
    getBreeds();
  }, []);

  return { breeds, isLoading, error };
};
