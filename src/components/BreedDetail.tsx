import React from "react";
import { useParams } from "react-router-dom";
import { useGetByBreed } from "../hooks/useGetByBreed";
import { BreedDetail as BreedDetailModel } from "../models/BreedDetail.model";
import { Metric } from "./Metric";
import "./BreedDetail.scss";
import { useGetCatsImages } from "../hooks/useGetCatsImages";

export const BreedDetail = () => {
  const [breedDetail, setBreedDetail] = React.useState<BreedDetailModel>(
    {} as BreedDetailModel
  );
  const { id } = useParams();
  const { breed, getByBreed } = useGetByBreed();
  const { images, getImages } = useGetCatsImages();
  React.useEffect(() => {
    if (id) {
      const imagesLimit = 8;
      getByBreed(id);
      getImages(id, imagesLimit);
    }
  }, []);

  React.useEffect(() => {
    if (breed?.breeds) setBreedDetail(breed.breeds[0]);
  }, [breed]);

  return (
    <section className="breed-detail">
      <section className="bred-detail__flex">
        <img
          className="breed-detail__img"
          src={breed?.url}
          alt={breedDetail.name}
        />
        <article>
          <h3 className="breed-detail__name">{breedDetail.name}</h3>
          <p className="breed-detail__feat">{breedDetail.description}</p>
          <p className="breed-detail__feat">
            <span className="bold">Temperament:</span> {breedDetail.temperament}
          </p>
          <p className="breed-detail__feat">
            <span className="bold">Origin:</span> {breedDetail.origin}
          </p>
          <p className="breed-detail__feat">
            <span className="bold">Life Span:</span> {breedDetail.life_span}
          </p>
          <Metric label="Adaptability" value={breedDetail.adaptability} />
          <Metric label="Affection level" value={breedDetail.affection_level} />
          <Metric label="Child friendly" value={breedDetail.child_friendly} />
          <Metric label="Grooming" value={breedDetail.grooming} />
          <Metric label="Intelligence" value={breedDetail.intelligence} />
          <Metric label="Health issues" value={breedDetail.health_issues} />
          <Metric label="Social needs" value={breedDetail.social_needs} />
          <Metric
            label="Stranger friendly"
            value={breedDetail.stranger_friendly}
          />
        </article>
      </section>
      <section className="other-photos">
        <h3 className="other-photos__title">Other photos</h3>
        <section className="gallery">
          {images && images.map((image, idx) => (
            <img
              className="gallery__img"
              src={image.url}
              alt={breedDetail.name}
              key={idx}
            />
          ))}
        </section>
      </section>
    </section>
  );
};
