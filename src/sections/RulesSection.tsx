import { ImportantText, StyledRulesSection } from './Sections.styled';

const RulesSection = () => {
  return (
    <StyledRulesSection id="pravidla nominací - Galavečer 2023">
      <ol>
        <li>Nominovat může pouze student nebo zaměstnanec UTB.</li>
        <li>
          Nominován může být pouze student UTB (prezenční i kombinované formy
          studia, bakalářského, magisterského, inženýrského či doktorandského
          programu).
        </li>
        <li>
          Nominován může být za zásluhy, které prospěly společnosti nebo i za
          svoji mimoškolní aktivitu prospěšnou okolí.
        </li>
        <li>
          Pořadatel akce (Studentská unie UTB) si vyhrazuje právo vyřadit
          nominace ty, které neodpovídají těmto pravidlům, nebo jsou vulgární či
          urážlivé.
        </li>
        <li>
          Galavečer UTB má 6 základních kategorií:
          <br />
          <ImportantText>Student FMK</ImportantText>
          <br />
          <ImportantText>Student FAME</ImportantText>
          <br />
          <ImportantText>Student FAI</ImportantText>
          <br />
          <ImportantText>Student FT</ImportantText>
          <br />
          <ImportantText>Student FLKŘ</ImportantText>
          <br />
          <ImportantText>Student FHS</ImportantText>
          <br />
          Pozn.: O těchto studentech rozhoduje vedení jednotlivých fakult.
        </li>
        <li>
          Galavečer UTB 2023 má další 2 speciální kategorie:
          <br />
          <ImportantText>Sportovec UTB</ImportantText>
          <br />
          <ImportantText>Sportovní tým UTB</ImportantText>
        </li>
        <li>
          Poslední kategorií je <ImportantText>Studentská cena</ImportantText>,
          do které spadají všichni výše uvedení a o umístění těchto studentů
          rozhodují zaměstnanci i studenti UTB, ale i široká veřejnost za pomoci
          svých hlasů (emailových adres) a to pouze jednou z jedné emailové
          adresy.
        </li>
        <li>
          Pořadatel (Studentská unie UTB) má právo prověřit pravost hlasů a v
          případě pochybností nominovaného vyloučit za podvodné hlasování.
        </li>
        <li>
          Pořadatel (Studentská unie UTB) je povinen kontaktovat výherce a
          domluvit se s nimi na dalším postupu.
        </li>
      </ol>
    </StyledRulesSection>
  );
};

export default RulesSection;
