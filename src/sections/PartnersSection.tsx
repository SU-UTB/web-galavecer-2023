import UTB from '../assets/img/partners/utb.svg';
import { TPartnerItem } from '../lib/types/TPartnerItem';
import { partnerItems } from './PartnersSection.content';
import { StyledPartnersSection } from './Sections.styled';

const PartnersSection = () => {
  return (
    <StyledPartnersSection id="partneri">
      <ul>
        {partnerItems.map(({ imgSrc, imgAlt }: TPartnerItem) => (
          <li key={imgAlt}>
            <img src={imgSrc} alt={imgAlt} />
          </li>
        ))}
      </ul>
      <img src={UTB} alt="Univerzita Tomáše Bati ve Zlíně" />
    </StyledPartnersSection>
  );
};

export default PartnersSection;
