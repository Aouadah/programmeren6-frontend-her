import React, { useState } from "react";

export default function About(props) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="About">
            <h4>About {props.name}</h4>
            <p>Let's learn all about {props.name}</p>
            <p>Number of likes: {likes}</p>
            <button onClick={() => {
                console.log("another like!");
                setLikes(likes + 1);
            }}>Like</button>
        </div>
    );
}