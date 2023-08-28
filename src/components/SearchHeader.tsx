import "./SearchHeader.css";

export const SearchHeader = () => {
  return (
    <header className="header">
      <h2 className="header__title">CatWiki</h2>
      <p className="header__text">Get to know more about your cat breed</p>
      <div className="search">
        <input
          className="search__input"
          type="text"
          name="search"
          id="search"
        />
        <span className="search__mobile-text">Search</span>
        <span className="material-symbols-outlined search__icon">search</span>
      </div>
    </header>
  );
};
