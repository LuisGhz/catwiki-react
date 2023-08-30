import "./TopBreeds.scss";
import { useGetCats } from "../hooks/useGetCats";

export const TopBreeds = () => {
  const { cats: topBreeds } = useGetCats("asc");

  return (
    <section className="top-breeds">
      <h2 className="top-breeds__title">Top 10 most searched breeds</h2>
      <section className="top-breeds__list">
        {topBreeds.map((breed, index) => (
          <article key={breed.id} className="top-breeds__item">
            <img
              className="top-breeds__item-img"
              src={breed.url}
              alt={breed.breeds[0].name}
            />
            <div>
              <div className="top-breeds__item-name">
                {index + 1}. {breed.breeds[0].name}
              </div>
              <div className="top-breeds__item-description">
                {breed.breeds[0].description}
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};
