import { Route, Routes as RouterRoutes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import NominationFormPage from './pages/NominationFormPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import RulesPage from './pages/RulesPage';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/o-galaveceru" element={<AboutPage />} />
      <Route path="/pravidla" element={<RulesPage />} />
      <Route path="/osobni-udaje" element={<PersonalInfoPage />} />
      <Route path="/nominace" element={<NominationFormPage />} />
    </RouterRoutes>
  );
};

export default Routes;
