import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import useGlobalReducer from '../hooks/useGlobalReducer'
import Planets from './Planets'
import Vehicles from '../Vehicles'



const StarWars = () => {
  const { store, dispatch } = useGlobalReducer()

  
  function apiVehicle() {
    fetch("https://www.swapi.tech/api/starships")
      .then((response) => { return response.json() })
      .then((data) => {
        dispatch({
          type: "set_vehicles",
          payload: { vehicle: data.results }
        })
      })
      .catch((err)=> {return err})
  }
  function apiPersonaje() {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => { return response.json() })
      .then((data) => {
        dispatch({
          type: "set_personajes",
          payload: { personaje: data.results }
        })
      })
      .catch((err) => { return err })
  }
  function apiPlanets() {
    fetch("https://www.swapi.tech/api/planets")
      .then((response) => { return response.json() })
      .then((data) => {
        dispatch({
          type: "set_planets",
          payload: { planet: data.results }
        })
      })
      .catch((err) => { return err })
  }
  useEffect(() => {
    apiPersonaje(),
      apiPlanets(),
      apiVehicle()
  }, [])
  return (
    <>
      <div className="container text-center">
        <h1>Personajes</h1>
        <div className="scroll">

          <div className="cards">
            {store.characters.map((value, index) => {
              return (
                <CharacterCard key={index} ch={value} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="container foto text-center">
        <h1>Planets</h1>
        <div className="scroll">

          <div className="cards">
            {store.planets.map((value, index) => {
              return (
                <Planets key={index} pl={value} />
              )
            })}
          </div>
        </div>
      </div>
      <div className="container text-center">
        <h1>Vehicles</h1>
        <div className="scroll">

          <div className="cards">
            {store.vehicles.map((value, index) => {
              return (
                <Vehicles key={index} ve={value} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default StarWars