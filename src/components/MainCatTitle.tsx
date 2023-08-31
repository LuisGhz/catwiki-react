import { useNavigate } from 'react-router-dom';
import Cat from '../assets/cat.png';
import './MainCatTitle.scss'

export const MainCatTitle = () => {
  const navigate = useNavigate();

  return (
    <div className='main-cat-title' onClick={() => navigate('/')}>
      <h1 className='main-cat-title__title mistery-cat'>CatWiki</h1>
      <img className='main-cat-title__img' src={Cat} alt="cat" />
    </div>
  );
}