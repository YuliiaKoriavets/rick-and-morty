import css from '../Character/Character.module.css';

export default function Character({ character }) {
  return (
    <div className={css.wrapper}>
      <span className={css.circle_wrapper}>
        <img
          className={css.circle_img}
          src={character.image}
          alt={character.name}
        />
      </span>
      <h2 className={css.title}>{character.name}</h2>
      <div className={css.information_wrapper}>
        <h3 className={css.information}>Informations</h3>
      </div>
      <div className={css.text_wrapper}>
        <h4 className={css.subtitle}>Gender</h4>
        <p className={css.text}>{character.gender}</p>
      </div>
      <div className={css.text_wrapper}>
        <h4 className={css.subtitle}>Status</h4>
        <p className={css.text}>{character.status}</p>
      </div>
      <div className={css.text_wrapper}>
        <h4 className={css.subtitle}>Specie</h4>
        <p className={css.text}>{character.species}</p>
      </div>
      <div className={css.text_wrapper}>
        <h4 className={css.subtitle}>Origin</h4>
        <p className={css.text}>{character.origin.name}</p>
      </div>
      <div className={css.text_wrapper}>
        <h4 className={css.subtitle}>Type</h4>
        <p className={css.text}>
          {character.type ? character.type : 'Unknown'}
        </p>
      </div>
    </div>
  );
}
