import { Route, Routes as RouterRoutes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NominationFormPage from './pages/NominationFormPage';
import PartnersPage from './pages/PartnersPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import RulesPage from './pages/RulesPage';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/pravidla" element={<RulesPage />} />
      <Route path="/osobni-udaje" element={<PersonalInfoPage />} />
      <Route path="/nominace" element={<NominationFormPage />} />
      <Route path="/partneri" element={<PartnersPage />} />
    </RouterRoutes>
  );
};

export default Routes;
