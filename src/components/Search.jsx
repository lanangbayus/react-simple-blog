import { useState } from "react"; // import useState
function Search(props) {
  const [search, setSearch] = useState(""); // useState
  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };
  return (
    <>
      <div>
        Cari Artikel :<input onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeydown}></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>

      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
