import TRoute from '../types/TRoute';

export const ROUTES: { [key: string]: TRoute } = {
  ABOUT: {
    path: '#o-galaveceru',
    text: 'O Galavečeru',
  },
  RULES: {
    path: '/pravidla',
    text: 'Pravidla',
  },
  PERSONAL_DATA: {
    path: '/osobni-udaje',
    text: 'Osobní údaje',
  },
  NOMINATIONS: {
    path: '/nominace',
    text: 'Nominace',
  },
};
