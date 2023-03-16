import FAI from '../assets/img/partners/fai.svg';
import FAME from '../assets/img/partners/fame.svg';
import FHS from '../assets/img/partners/fhs.svg';
import FLKR from '../assets/img/partners/flkr.svg';
import FMK from '../assets/img/partners/fmk.svg';
import FT from '../assets/img/partners/ft.svg';
import { TPartnerItem } from '../lib/types/TPartnerItem';

export const partnerItems: TPartnerItem[] = [
  {
    imgSrc: FAI,
    imgAlt: 'Fakulta aplikované informatiky',
    linkTo: 'https://fai.utb.cz/',
  },
  {
    imgSrc: FAME,
    imgAlt: 'Fakulta managementu a ekonomiky',
    linkTo: 'https://fame.utb.cz/',
  },
  {
    imgSrc: FHS,
    imgAlt: 'Fakulta humanitných studií',
    linkTo: 'https://fhs.utb.cz/',
  },
  {
    imgSrc: FLKR,
    imgAlt: 'Fakulta logistiky a křizového řízení',
    linkTo: 'https://flkr.utb.cz/',
  },
  {
    imgSrc: FMK,
    imgAlt: 'Fakulta marketinkových komunikakcí',
    linkTo: 'https://fmk.utb.cz/',
  },
  {
    imgSrc: FT,
    imgAlt: 'Fakulta technologická',
    linkTo: 'https://ft.utb.cz/',
  },
];
