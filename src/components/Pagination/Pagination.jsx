import css from "../Pagination/Pagination.module.css"

export default function Pagination({
  onClickPrev,
  onClickNext,
  page,
  allPages,
}) {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onClickPrev}>Previous</button>
      <p>
        {page} / {allPages}
      </p>
      <button className={css.button} onClick={onClickNext}>Next</button>
    </div>
  );
}
