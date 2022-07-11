import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import GithubSearch from './pages/GithubSearch';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/github-api">
          <GithubSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
