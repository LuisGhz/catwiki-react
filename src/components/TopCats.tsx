import React from "react";
import { useGetTopCats } from "../hooks/useGetTopCats";
import "./TopCats.scss";

export const TopCats = () => {
  const [catsLimit, setCatsLimit] = React.useState(4);
  const { topCats } = useGetTopCats();
  React.useEffect(() => {
    console.log(topCats);
  });
  return (
    <section className="top-cats">
      <div className="top-cats__container">
        <h3 className="top-cats__title">Most searched Breeds</h3>
        <hr className="top-cats__hr" />
        <div className="see-more">
          <p className="see-more__desc">66+ Breeds For you to discover</p>
          <p className="see-more__link" onClick={() => {
            setCatsLimit(10);
          }}>
            See more 
            <span className="material-symbols-outlined see-more__icon">
              arrow_right_alt
            </span>
          </p>
        </div>
        <section className="cats-list">
          {topCats.slice(0, catsLimit).map((cat) => {
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
