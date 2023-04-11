import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterData } from "../APi/request";

export default function Character (){
    const params = useParams();
    const {id} = params;
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getCharacter = async () => {
        const res = await getCharacterData(id);
        setCharacter(res);
        setLoading(false);
    };
    console.log(character)
    return(
        <div className="app-header">
            <div className="character-container">
                <h1>{character.name}</h1>
            </div>
        </div>




            /* <div className="character-container"> */

                /* {characters.map((c,i) => (
                    <div className="character-container" key={i}>
                        <div>
                            <img src={c.image} alt={c.name} />
                        </div>
                        <div style={{
                            padding: '15px'
                        }}>
                            <a className="name" href={`/Character/${c.id}`}><h3>{c.name}</h3></a>
                            
                            <h6> 
                                {c.status === "Alive" ? (
                                    <>
                                    <span className="alive" />
                                    Alive
                                    </>
                                ):(
                                    <>
                                    <span className="dead" />
                                    Dead
                                    </>
                                )
                                }
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{c.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{c.species}</span>
                            </p>
                        </div>
                    </div>
                ))} */
            // </div>
            /* <div>
                <span className="back-home" onClick={resetCharacters}>volver a home</span>
            </div> */
    )
}

    