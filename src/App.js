import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetail from './pages/Detail';
import Error404 from './pages/Errors/error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="pokemon"
          element={<Error404/>}
        />
        <Route
          path="pokemon/:id"
          element={<PokemonDetail />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
