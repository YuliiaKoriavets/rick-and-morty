import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCharactersByName } from 'services/api';
import SearchBar from 'components/SearchBar/SearchBar';
import CharactersList from 'components/CharactersList/CharactersList';
import Pagination from 'components/Pagination';
import css from '../Characters/Characters.module.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    try {
      getCharactersByName(query).then(data => {
        console.log(data);
        setCharacters(data.results);
      });
    } catch (error) {
      console.error(error);
    }
  }, [query]);

  const handleChange = event => setQuery(event.target.value);

  return (
    <div className={css.container}>
      <div className={css.wrapper}></div>
      <SearchBar onChange={handleChange} query={query} />
      {characters.length > 0 && (
        <CharactersList characters={characters} state={{ from: location }} />
      )}
    </div>
  );
}
