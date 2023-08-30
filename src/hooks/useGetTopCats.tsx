import React from "react";
import { Cat } from "../models/Cat.mode";

export const useGetTopCats = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [topCats, setTopCats] = React.useState<Cat[]>([]);
  const [error, setError] = React.useState("");

  const getTopCats = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api");

      if (!response.ok) throw new Error();

      const data: Cat[] = await response.json();
      setTopCats(data);
    } catch {
      setError("Something get wrong please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getTopCats();
  }, []);

  return {
    isLoading,
    topCats,
    error,
  };
};
