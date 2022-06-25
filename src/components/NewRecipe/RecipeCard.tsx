import { FC } from 'react'
import './RecipeCard.scss'
import start from '../../assets/icons/ic_star.svg'
import favorite from '../../assets/icons/ic-favorite.svg'
import chef from '../../assets/icons/ic_chef.svg'
import time from '../../assets/icons/ic_time.svg'
import portion from '../../assets/icons/ic_portion.svg'

interface IRecipe {
  title: string;
  tag: string;
  star: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  image: string;
}

interface IProps {
  recipe: IRecipe
}

const RecipeCard: FC<IProps> = ({ recipe }) => {
  return (
    <div className="card">
      <div className='card__img__content'>
        <img className='card__card--img' src={recipe.image} alt={recipe.title} />
        <p className='card__header--title' >{recipe.title} <span>{recipe.tag}</span> </p>
      </div>

      <div className='card__footer__content'>
        <div className='recipe-card-start'>
            <img className='recipe-card-footer-img' src={start} alt="start" /> 
            <p className='recipe-score'>{recipe.star}</p>
        </div>
        <div>
          <img className='recipe-card-footer-img' src={favorite} alt="start" />
        </div>
      </div>

      <div className='card__detail'>

        <div className='card__detail--item'>
          <img src={portion} alt="portion" />
          <p className='card__detail' >Tamaño de la porción</p>
          <p className='card__detail--normal' >{recipe.servings} raciones</p>
        </div>

        <div className='card__detail--item'>
          <img src={time} alt="time" />
          <p className='card__detail'>Tiempo de preparación</p>
          <p className='card__detail--normal'>{recipe.readyInMinutes} minutos</p>
        </div>

        <div className='card__detail--item'>
          <img src={chef} alt="difficulty" />
          <p className='card__detail' >Dificultad</p>
          <p className='card__detail--normal' >{recipe.difficulty}</p>
        </div>

      </div>

    </div>
  )
}

export default RecipeCard