import Button from 'components/Button';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <h1>Desafio Github API</h1>
          <p>Bootcamp Spring React - DevSuperior</p>
        </div>
        <div className="home-btn-container">
          <Link to="/github-api">
            <Button text="Começar" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
