import "./profile.css";

const Profile = (character, { dark }) => {
  const cardClass = dark ? "dark" : "light";
  return (
    <div className={`card ${cardClass}`}>
      <h1>{character.name}</h1>
      <p>Dead or Alive : {character.status}</p>
      <p>Species : {character.species}</p>
      <p>Gender : {character.gender}</p>
      <p>Origin : {character.origin.name}</p>
      <p>Location : {character.location.name}</p>
      <img className="img-card" src={character.image} alt="" />
    </div>
  );
};

export default Profile;
