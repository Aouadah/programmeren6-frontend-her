import { useState, useEffect } from 'react';
import Songs from "./Songs.jsx";

function Data() {
    // useState
    const [songs, setSongs] = useState([]);
    const [newSong, setNewSong] = useState({ title: "", album: "", artist: "" });
    const [editSong, setEditSong] = useState(null);

    // Fetch songs with GET
    const getSongs = async () => {
        try {
            const response = await fetch("http://145.24.223.201:8000/songs", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                }
            })
            const data = await response.json();
            setSongs(data.items);
            console.log(data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Make new songs with POST
    const postSongs = async (songData) => {
        try {
            const response = await fetch("http://145.24.223.201:8000/songs", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(songData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                getSongs();
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Update songs with PUT
    const updateSong = async (songId, updatedSongData) => {
        try {
            const response = await fetch(`http://145.24.223.201:8000/songs/${songId}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedSongData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Success:", result);
                getSongs();
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Delete songs with DELETE
    const deleteSong = async (songId) => {
        try {
            const response = await fetch(`http://145.24.223.201:8000/songs/${songId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log("Song deleted successfully");
                getSongs();
            } else {
                console.error("Error deleting song:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        getSongs();
    }, []);

    // Function to handle input changes for a new song
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
    };

    // Function to handle opening the edit pop-up
    const openEditPopup = (song) => {
        if (song._id) {
            setEditSong(song);
        } else {
            console.error("Song ID is undefined.");
        }
    };

    // Function to handle closing the edit pop-up
    const closeEditPopup = () => {
        setEditSong(null);
    };

    return (
        <div>
            <Songs
                songs={songs}
                updateSong={updateSong}
                deleteSong={deleteSong}
                openEditPopup={openEditPopup}
                newSong={newSong}
                handleInputChange={handleInputChange}
                postSongs={postSongs}
            />

            {editSong && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Edit Song</h2>
                        <input
                            className="block w-full p-2 border border-gray-300 rounded mb-2"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={editSong.title || ""}
                            onChange={(e) => setEditSong({ ...editSong, title: e.target.value })}
                            required
                        />
                        <input
                            className="block w-full p-2 border border-gray-300 rounded mb-2"
                            type="text"
                            name="album"
                            placeholder="Album"
                            value={editSong.album || ""}
                            onChange={(e) => setEditSong({ ...editSong, album: e.target.value })}
                            required
                        />
                        <input
                            className="block w-full p-2 border border-gray-300 rounded mb-2"
                            type="text"
                            name="artist"
                            placeholder="Artist"
                            value={editSong.artist || ""}
                            onChange={(e) => setEditSong({ ...editSong, artist: e.target.value })}
                            required
                        />
                        <div className="mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                                onClick={() => {
                                    updateSong(editSong._id, editSong);
                                    closeEditPopup();
                                }}
                            >
                                Update
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                onClick={closeEditPopup}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Data;


