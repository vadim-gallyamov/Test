import { useParams } from "react-router-dom";
import { USERS } from "../../data";
import { PLAYLISTS } from "../../data";
import { Link } from "react-router-dom";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS[Number(userId)];


	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>пользователя таким userId нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
        {user.playlist && (
          <p>
            Плейлист:{" "}
            <Link to={`/playlists/${user.playlist.id}`} key={user.playlist.id}>
              {user.playlist.name}
            </Link>
          </p>
        )}
      </div>
		</div>
	);
}
