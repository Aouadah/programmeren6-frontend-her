import './App.css';
import { Link } from "react-router-dom";

function Songs({ songs, updateSong, deleteSong, openEditPopup, newSong, handleInputChange, postSongs }) {
    return (
        <div className="bg-indigo-300 p-4 rounded">
            <h2 className="text-xl text-white font-bold">Add a new song</h2>
            <div className="p-4">
                <form onSubmit={(e) => { e.preventDefault(); postSongs(newSong); }}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newSong.title}
                        onChange={handleInputChange}
                        required
                        className="m-1"
                    />
                    <input
                        type="text"
                        name="album"
                        placeholder="Album"
                        value={newSong.album}
                        onChange={handleInputChange}
                        required
                        className="m-1"
                    />
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        value={newSong.artist}
                        onChange={handleInputChange}
                        required
                        className="m-1"
                    />
                    <button type="submit" className="m-2">Add New Song</button>
                </form>
            </div>
            <ul className="text-white">
                {songs.map((song) => (
                    <li key={song._id} className="mb-4 flex justify-between items-center">
                        <p className="text-lg font-bold">{song.title}</p>
                        <div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                <Link to={`/songs/${song._id}`} className="text-white">
                                    Details
                                </Link>
                            </button>
                            <button
                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Songs;