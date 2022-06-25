import Ojingeo from 'src/assets/Ojingeo-muchim-1.png'
import Ojingeo_2 from 'src/assets/Ojingeo-muchim.png'
import Ojingeo_3 from 'src/assets/Ojingeo-muchim-5.png'
import cherry from 'src/assets/cherry.png'

export interface NewRecipes {
  title: string;
  tag: string;
  star: string;
  servings: number;
  readyInMinutes: number;
  difficulty: string;
  image: string;
}

export const newRecipes: NewRecipes[] = [
  {
    title: 'Ojingeo',
    tag: 'Muchim',
    star: '5.0',
    servings: 4,
    readyInMinutes: 10,
    difficulty: 'fácil',
    image: Ojingeo
  },
  {
    title: 'Cola',
    tag: 'Chicken',
    star: '5.0',
    servings: 4,
    readyInMinutes: 10,
    difficulty: 'fácil',
    image: Ojingeo_2
  },
  {
    title: 'Roasted',
    tag: 'Carrot',
    star: '4.5',
    servings: 4,
    readyInMinutes: 10,
    difficulty: 'fácil',
    image: Ojingeo_3
  },
  {
    title: 'Sweet',
    tag: 'Cherries',
    star: '4.0',
    servings: 4,
    readyInMinutes: 10,
    difficulty: 'fácil',
    image: cherry
  },
]