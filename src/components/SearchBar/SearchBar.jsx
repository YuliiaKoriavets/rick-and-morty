import css from '../SearchBar/SearchBar.module.css';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function SearchBar({ onChange, query }) {
  return (
    <div className={css.wrapper}>
      <IconContext.Provider value={{ color: 'rgba(0, 0, 0, 0.54)', size: '18px' }}>
        {/* <div> */}
        <BiSearchAlt2 />
        {/* </div> */}
      </IconContext.Provider>
      <input
        className={css.input}
        type="text"
        placeholder="Filter by name..."
        onChange={onChange}
        value={query}
      />
    </div>
  );
}
