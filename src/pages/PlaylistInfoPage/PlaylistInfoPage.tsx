import { useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import { Link } from "react-router-dom";
import "./PlaylistInfoPage.css";


export function PlaylistInfoPage() {
  const { playlistId } = useParams();
  const playlist = PLAYLISTS[Number(playlistId)];

  if (!playlist) {
    return (
      <div className="PlaylistInfoPage">
        <h2>PlaylistInfoPage</h2>
        <div className="playlists">
          <p>плейлиста с таким playlistId нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="PlaylistInfoPage">
      <h2>PlaylistInfoPage</h2>

      <div className="playlists">
      {playlist && (
          <p>
            Жанр:{" "}
            <Link to={"/playlist"}>{playlist.genre}
            </Link>
          </p>
        )}
        <p>Название: {playlist.name}</p>
        <ul className="songs">
          {playlist.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
