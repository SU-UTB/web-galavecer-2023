import UTB from '../assets/img/partners/utb.svg';
import { TPartnerItem } from '../lib/types/TPartnerItem';
import { partnerItems } from './PartnersSection.content';
import { StyledPartnersSection } from './Sections.styled';

const PartnersSection = () => {
  return (
    <StyledPartnersSection id="partneri">
      <ul>
        {partnerItems.map(({ imgSrc, imgAlt, linkTo }: TPartnerItem) => (
          <li key={imgAlt}>
            <a href={linkTo} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={imgAlt} />
            </a>
          </li>
        ))}
      </ul>
      <a href="https://utb.cz/" target="_blank" rel="noopener noreferrer">
        <img src={UTB} alt="Univerzita Tomáše Bati ve Zlíně" />
      </a>
    </StyledPartnersSection>
  );
};

export default PartnersSection;
