import React, { useEffect } from 'react'
import CharacterCard from './CharacterCard'
import useGlobalReducer from '../hooks/useGlobalReducer'


const Personajes = () => {
  const {store, dispatch} = useGlobalReducer()
  useEffect(()=>{
    fetch("https://www.swapi.tech/api/people")
    .then((response)=>{ return response.json() })
    .then((data)=>{
      console.log(data);
      
      dispatch({
        type: "set_personajes",
        payload: {personaje : data.results}
      })
    })
    .catch((err)=>{ return err})
  }, [])
  return (
    <div className="container text-center">
        <h1>Personajes</h1>
        <div className="scroll">

        <div className="cards">
          {store.character.map((value, index)=>{
            return (
              <CharacterCard key={index} ch={value}/>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Personajes