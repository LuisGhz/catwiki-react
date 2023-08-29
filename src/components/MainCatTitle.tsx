import Cat from '../assets/cat.png';
import './MainCatTitle.scss'

export const MainCatTitle = () => {
  return (
    <div className='main-cat-title'>
      <h1 className='main-cat-title__title mistery-cat'>CatWiki</h1>
      <img className='main-cat-title__img' src={Cat} alt="cat" />
    </div>
  );
}