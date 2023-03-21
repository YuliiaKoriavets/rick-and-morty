import { Routes, Route } from 'react-router-dom';
import Characters from 'pages/Characters/Characters';
import CharacterDetails from 'pages/CharacterDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Characters />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  );
};
