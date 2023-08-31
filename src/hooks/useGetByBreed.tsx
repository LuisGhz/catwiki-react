import React from "react";
import { Cat } from "../models/Cat.mode";

export const useGetByBreed = () => {
  const [breed, setBreed] = React.useState<Cat>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const getByBreed = async (breedId: string) => {
    setIsLoading(true);

    try {
      const res = await fetch(
        `http://localhost:3000/api/get-by-breed?breed=${breedId}`
      );

      if (!res.ok) throw new Error();

      const data: Cat[] = await res.json();
      setBreed(data[0]);
    } catch {
      setError("Error fetching data");
    }
  };

  return {
    breed,
    isLoading,
    error,
    getByBreed,
  };
};
