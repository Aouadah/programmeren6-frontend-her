import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
    const { songId } = useParams(); // Extract songId from URL
    const [song, setSong] = useState(null);

    console.log("heyo detail")

    // GET song details
    const getSongDetails = async () => {
        try {
            const response = await fetch(`http://145.24.223.201:8000/songs/${songId}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                }
            });
            const data = await response.json();
            setSong(data); // Set fetched song data
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        getSongDetails();
    }, [songId]); // Fetch song details whenever songId changes

    return (
        <div className="bg-indigo-300 p-4 rounded">
            {song && (
                <div className="mb-4 text-white text-lg">
                    <div className="p-4">
                        <p className="font-bold">Title:</p>
                        <p>{song.title}</p>
                    </div>
                    <div className="p-4">
                        <p className="font-bold">Album:</p>
                        <p>{song.album}</p>
                    </div>
                    <div className="p-4">
                        <p className="font-bold">Artist:</p>
                        <p>{song.artist}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetailPage;