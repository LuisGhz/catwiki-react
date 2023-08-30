import React from "react";
import { CatImage } from "../models/CatImage.model";
export const useGetCatsImages = () => {
  const [images, setImages] = React.useState<CatImage[]>([]);

  const getImages = async (breed: string, limit = 10) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/get-cats-images?breed=${breed}&limit=${limit}`
      );

      if (!res.ok) throw new Error();

      const data: CatImage[] = await res.json();
      setImages(data);
    } catch {
      console.log("Error fetching data");
    }
  };

  return {
    images,
    getImages,
  };
};
