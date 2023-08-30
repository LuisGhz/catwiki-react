import "./Footer.scss";
import blackCat from "../assets/black-cat.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text-container">
        <div className="footer__img-container">
          <p className="footer__catwiki mistery-cat">CatWiki</p>
          <img className="footer__img" src={blackCat} alt="Black cat" />
        </div>
        <p className="footer__text">
          <span className="footer_copyright">&copy;</span> created by &nbsp;
          <span className="footer__username">luisghz</span> - devChallenges.io
          2023
        </p>
      </div>
    </footer>
  );
};
