import React from "react";
import { useGetCats } from "../hooks/useGetCats";
import "./RandomBreeds.scss";

export const RandomBreeds = () => {
  const { cats: randomCats } = useGetCats();
  React.useEffect(() => {
    console.log(randomCats);
  });

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
          {randomCats.map((cat) => {
            return (
              <picture className="cats-list__cat" key={cat.id}>
                <img
                  className="cats-list__cat-img"
                  src={cat.url}
                  alt={cat.breeds[0].name}
                />
                <p className="cats-list__cat-name">{cat.breeds[0].name}</p>
              </picture>
            );
          })}
        </section>
      </div>
    </section>
  );
};
