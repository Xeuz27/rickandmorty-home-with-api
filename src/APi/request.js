import axios from 'axios';

export async function reqapi(){
        const api = await axios.get('https://rickandmortyapi.com/api/character');

        const characterapi = await api.data.results;
        
        return characterapi;

}

export async function getCharacterData(id){
        try{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            return res.data;
        }
        catch(err){
            return err.response;
        }
    }
