import './styles.css';

type Props = {
  avatar_url: string,
  profile: string;
  followers: number;
  city: string;
  name: string;
}

const GithubCard = ( { avatar_url, profile, followers, city, name } : Props ) => {
  return (
    <div className="card-container">
        <div className="card-image-container">
            <img src={avatar_url} alt="Adicione uma foto" />
        </div>
        <div className="card-content-container">
            <h1>Informações</h1>
            <p className="profile"><span>Perfil:</span> <a href={profile}>{profile}</a></p>
            <p className="follow"><span>Seguidores:</span> {followers}</p>
            <p className="city"><span>Localidade:</span> {city}</p>
            <p className="name"><span>Nome:</span> {name}</p>
        </div>
    </div>
  );
};

export default GithubCard;
