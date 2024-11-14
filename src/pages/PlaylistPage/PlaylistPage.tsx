import { ChangeEvent } from "react";
import { PLAYLISTS } from "../../data";
import "./PlaylistPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlaylistPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({ searchName: value.toLowerCase() });
  };

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({ searchGenre: value.toLowerCase() });
  };

  const searchName = searchParams.get("searchName") || "";
  const searchGenre = searchParams.get("searchGenre") || "";

  const filteredPlaylists = PLAYLISTS.filter(
    ({ name, genre }) =>
      name.toLowerCase().includes(searchName) &&
      genre.toLowerCase().includes(searchGenre) &&
      genre !== "Non Music"
  );

  return (
    <div className="PlaylistPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        <label>
          введите название{" "}
          <input
            type="text"
            value={searchName}
            onChange={handleSearchName}
          />
        </label>
        <label>
          введите жанр{" "}
          <input
            type="text"
            value={searchGenre}
            onChange={handleSearchGenre}
          />
        </label>

        {filteredPlaylists.map(({ id, name, genre }) => (
          <Link to={`/playlists/${id}`} key={id}>
            {name} - {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}
