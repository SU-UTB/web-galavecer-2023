import { Route, Routes as RouterRoutes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PartnersPage from './pages/PartnersPage';
import PersonalInfoPage from './pages/PersonalInfoPage';
import RulesPage from './pages/RulesPage';
import VotingFormPage from './pages/VotingFormPage';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/pravidla" element={<RulesPage />} />
      <Route path="/osobni-udaje" element={<PersonalInfoPage />} />
      <Route path="/hlasuj" element={<VotingFormPage />} />
      <Route path="/partneri" element={<PartnersPage />} />
    </RouterRoutes>
  );
};

export default Routes;
