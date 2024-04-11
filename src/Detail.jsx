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
        <div>
            {song && (
                <div>
                    <h2>Title: {song.title}</h2>
                    <p>Album: {song.album}</p>
                    <p>Artist: {song.artist}</p>
                </div>
            )}
        </div>
    );
}

export default DetailPage;