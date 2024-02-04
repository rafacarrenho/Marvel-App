import { Routes as LibRoutes, Route, Navigate } from "react-router-dom";
import { Character } from "pages/Character";
import { Home } from "pages/Home";

export const Routes = () => (
  <LibRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/personagem/:id" element={<Character />} />
    <Route path="*" element={<Navigate to="/" />} />
  </LibRoutes>
);
