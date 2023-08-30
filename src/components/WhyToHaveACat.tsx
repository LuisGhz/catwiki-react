import "./WhyToHaveACat.scss";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

export const WhyToHaveACat = () => {
  return (
    <section className="why-to">
      <hr className="why-to__hr hr-separator" />
      <h3 className="why-to__title">Why should you have a cat?</h3>

      <p className="why-to__text">
        Having a cat around you can actually trigger the release of calming
        chemicals in your body which lower your stress and anxiety leves
      </p>
      <p className="why-to__read-more">
        READ MORE
        <span className="material-symbols-outlined why-to__icon">
          arrow_right_alt
        </span>
      </p>
      <section className="gallery">
        <img className="gallery__image-1" src={image2} alt="Cat 1" />
        <img className="gallery__image-2" src={image1} alt="Cat 2" />
        <img className="gallery__image-3" src={image3} alt="Cat 3" />
      </section>
    </section>
  );
};
