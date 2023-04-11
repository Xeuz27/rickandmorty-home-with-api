import { useState } from 'react';
import { reqapi } from './APi/request';
import Characters  from './components/characters';
import RickAndMorty from './components/rickandmorty';
import './index.css';

export default function App() {
    const [characters, setCharacters] = useState(null);

    const getCharacters = async () => {
        const res = await reqapi();
        setCharacters(res)
    };

    return( 
    <div className="App">
        <header className="App-header">
            <h1 className="title">Rick & Morty</h1>

            {characters ? (
                <Characters characters={characters} setCharacters={setCharacters} />
            ):(
                <>
                <RickAndMorty />
                <button onClick={getCharacters} className="btn-search">cargar personajes</button>
                </>
            )}

        </header>


    </div>
    )

}