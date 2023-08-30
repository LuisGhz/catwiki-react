import React from "react";
import { Cat } from "../models/Cat.mode";

export const useGetCats = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [cats, setCats] = React.useState<Cat[]>([]);
  const [error, setError] = React.useState("");

  const getTopCats = async (order: "rand" | "asc" = "rand") => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api?order=" + order);

      if (!response.ok) throw new Error();

      const data: Cat[] = await response.json();
      setCats(data);
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
    cats,
    error,
  };
};
