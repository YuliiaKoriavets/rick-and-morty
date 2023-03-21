import { Link } from 'react-router-dom';
import css from '../CharactersList/CharactersList.module.css';

export default function CharactersList({ characters, state }) {
  return (
    <ul className={css.list}>
      {characters.map(({ id, image, name, species }) => (
        <li className={css.item} key={id}>
          <Link className={css.link} to={`${id}`} state={state}>
            <img className={css.image} src={image} alt={name} />
            <h3 className={css.name}>{name}</h3>
            <p className={css.species}>{species}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
