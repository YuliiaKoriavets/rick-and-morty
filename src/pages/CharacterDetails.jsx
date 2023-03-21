import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getSingleCharacter } from 'services/api';
import Character from 'components/Character';

export default function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    try {
      getSingleCharacter(Number(id)).then(res => 
        setCharacter(res));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {character && <Character character={character} />}
    </div>
  );
}
