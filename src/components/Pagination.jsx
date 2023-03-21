export default function Pagination ({ totalPosts, postPerPage, paginate }){
    const postNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      postNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {postNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
}