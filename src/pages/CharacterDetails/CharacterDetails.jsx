import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getSingleCharacter } from 'services/api';
import Character from 'components/Character/Character';
import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import css from "../CharacterDetails/CharacterDetails.module.css"

export default function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    try {
      getSingleCharacter(Number(id)).then(res => setCharacter(res));
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={css.container}>
      <Link className={css.link_go_back} to={backLinkHref}>
        <IconContext.Provider value={{ color: '#000000;', size: '16px' }}>
          {/* <div> */}
          <AiOutlineArrowLeft />
          {/* </div> */}
        </IconContext.Provider>
        Go back
      </Link>
      {character && <Character character={character} />}
    </div>
  );
}
