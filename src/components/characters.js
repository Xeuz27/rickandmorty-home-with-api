
export default function Characters(props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null) 
    }


    
    return(
        <div className="characters">
            <h1>personajes</h1>
            <span className="back-home" onClick={resetCharacters}>volver a home</span>
            <div className="container-characters">
                {characters.map((c,i) => (
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
                ))}
            </div>
            <div>
                <span className="back-home" onClick={resetCharacters}>volver a home</span>
            </div>
        </div>
    )
}