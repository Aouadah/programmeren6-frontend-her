import {Outlet} from 'react-router-dom'
import './App.css'
import { Link } from "react-router-dom";
function App() {
    return (
        <div>
            <div className="text-5xl pb-3 italic font-bold text-blue-800">
                SongShare
            </div>
            <div className="pb-6">
                <button className="mr-2 bg-blue-500">
                    <Link to="/" className="text-white">
                        Home
                    </Link>
                </button>
                <button className="mr-2 bg-blue-500">
                    <Link to="/songs/" className="text-white">
                        Songs
                    </Link>
                </button>
                <button className="mr-2 bg-blue-500">
                    <Link to="/about" className="text-white">
                        About
                    </Link>
                </button>
            </div>
            <Outlet/>
        </div>
    )
}

export default App



























// import './App.css'
// // import About from "./About.jsx";
// import { useState } from "react";
// import bird from './assets/the w.jpg';
// function App() {
//     const [pokemon, setPokemon] = useState(["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard"]);
//     const pokemonList = (
//         <ul>
//             {pokemon.map((pok, index) => (
//                 <li key={index}>{pok}</li>
//             ))}
//         </ul>
//     );
//     const addPokemon = () => {
//         setPokemon(pokemon => [...pokemon,                 <img src={bird} alt="the w"/>])
//     }
//
//     return (
//         <>
//             <h1>pokemon</h1>
//             <div className="Pokedex">
//                 <h4>Pokedex entries: {pokemon.length}</h4>
//                 <button onClick={addPokemon}>Add "the w"</button>
//                 <ul>{pokemonList}</ul>
//             </div>
//             {/*<About name="Erik"></About>*/}
//             {/*<About name="Bas"></About>*/}
//
//         </>
//     )
// }
//
// export default App