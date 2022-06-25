import { ICategory } from "src/interfaces/ICategory";
import vegeratianImg from '../assets/icons/ic_vegetarian.svg'
import mainImg from '../assets/icons/ic_main.svg'
import cakeImg from '../assets/icons/ic_cake.svg'
import fastFoodImg from '../assets/icons/ic_fast-food.svg'
import kidsImg from '../assets/icons/ic_kids.svg'
import soupImg from '../assets/icons/ic_soup.svg'


export const categories: ICategory[] = [
  {
    title: 'Vegetarianos',
    image: vegeratianImg,
  },
  {
    title: 'Principales',
    image: mainImg,
  },
  {
    title: 'Tortas',
    image: cakeImg,
  },
  {
    title: 'Rapida',
    image: fastFoodImg,
  },
  {
    title: 'Menú Niños',
    image: kidsImg,
  },
  {
    title: 'Sopas',
    image: soupImg,
  },

]