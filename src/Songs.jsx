import './App.css';
import {Link} from "react-router-dom";

function Songs({ songs, updateSong, deleteSong, closeSongDetails, openEditPopup, closeEditPopup }) {
    return (
        <div>
            <div>
                <h2>Song List</h2>
                <ul>
                    {songs.map((song) => (
                        <li key={song._id} className="mb-4">
                            <p className="text-lg font-bold">Title: {song.title}</p>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                {/*<Link to={`/song/${song._id}`}>View Details</Link>*/}
                                <Link to={`/songs/${song._id}`} className="text-white">
                                    Details
                                </Link>
                            </button>
                            <button
                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => openEditPopup(song)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => deleteSong(song._id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Songs