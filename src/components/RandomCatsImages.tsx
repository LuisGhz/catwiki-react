import React from "react";
import "./RandomCatsImages.scss";
import { useGetCatsImages } from "../hooks/useGetCatsImages";

export const RandomCatsImages = () => {
  const { images, getImages } = useGetCatsImages();
  React.useEffect(() => {
    getImages("", 4);
  }, []);

  return (
    <section className="random-breeds">
      <div className="random-breeds__container">
        <h3 className="random-breeds__title">Most searched Breeds</h3>
        <hr className="hr-separator" />
        <div className="see-more">
          <p className="see-more__desc">66+ Breeds For you to discover</p>
          <a className="see-more__link" href="/top">
            See more
            <span className="material-symbols-outlined see-more__icon">
              arrow_right_alt
            </span>
          </a>
        </div>
        <section className="cats-list">
          {images.map((cat, idx) => {
            return (
              <picture className="cats-list__cat" key={idx}>
                <img
                  className="cats-list__cat-img"
                  src={cat.url}
                  alt={cat.name}
                />
                <p className="cats-list__cat-name">{cat.name}</p>
              </picture>
            );
          })}
        </section>
      </div>
    </section>
  );
};
