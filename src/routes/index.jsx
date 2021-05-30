import { Switch, Route } from "react-router-dom";
import { Character } from "../pages/Character";
import { Home } from "../pages/Home";

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route exact path="/personagem/:id" component={Character} />
  </Switch>
);
