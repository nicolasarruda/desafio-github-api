import axios from 'axios';
import Button from 'components/Button';
import GithubCard from 'components/GithubCard';
import GithubCardLoaderLarge from 'pages/GithubSearch/GithubCardLoaderLarge';
import GithubCardLoaderMobile from 'pages/GithubSearch/GithubCardLoaderMobile';
import { useState } from 'react';
import './styles.css';

type FormData = {
  user: string;
};

type GithubProfile = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const GithubSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });

  const [data, setData] = useState<GithubProfile>();

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setData(undefined);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <div className="search-painel-container">
            <h1>Encontre um perfil Github</h1>
            <input
              type="text"
              name="user"
              value={formData.user}
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <Button text="Encontrar" />
          </div>
        </form>
        {isLoading ? (
          window.innerWidth < 768 ? (
            <GithubCardLoaderMobile />
         ) : (
            <GithubCardLoaderLarge />
         )
        ) : (
          <>
            {data && (
              <GithubCard
                avatar_url={data.avatar_url}
                profile={data.url}
                followers={data.followers}
                city={data.location}
                name={data.name}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default GithubSearch;
