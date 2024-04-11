import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-gradient-to-b from-blue-500 to-purple-500 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Welcome to SongShare</h1>
            <p className="text-xl text-white mb-8 max-w-md text-center">
                Share your favorite songs with the world. Discover new tunes recommended by music enthusiasts like you.
            </p>
            <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
                Get Started
            </button>
        </div>
    );
};

export default Home;