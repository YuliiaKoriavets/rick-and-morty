import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCharactersByName } from 'services/api';
import SearchBar from 'components/SearchBar/SearchBar';
import CharactersList from 'components/CharactersList/CharactersList';
import Pagination from 'components/Pagination/Pagination';
import css from '../Characters/Characters.module.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState(() => {
    const saved = localStorage.getItem('query');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    try {
      getCharactersByName(page, query).then(data => {
        data.results.sort((a, b) => (a.name > b.name ? 1 : -1));
        setCharacters(data.results);
        setInfo(data.info);
      });
    } catch (error) {
      setPage(1);
      console.error(error);
    }
    localStorage.setItem('query', JSON.stringify(query));
  }, [page, query]);

  const handleChange = event => setQuery(event.target.value);

  const nextPageHandle = event => {
    event.preventDefault();
    if (page <= info.pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevPageHandle = event => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(info.pages);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.wrapper}></div>
      <SearchBar onChange={handleChange} query={query} />
      {characters.length > 0 && (
        <CharactersList characters={characters} state={{ from: location }} />
      )}
      <Pagination
        onClickPrev={event => prevPageHandle(event)}
        onClickNext={event => nextPageHandle(event)}
        page={page}
        allPages={info.pages}
      />
    </div>
  );
}
