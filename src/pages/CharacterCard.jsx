import React from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const CharacterCard = ({ ch }) => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const isFavorite = store.favorites.includes(ch.name)
  const handleFavorite = () => {
    if (isFavorite === true) {
      const action = {
        type: "removeFavorite",
        payload: ch.name
      }
      dispatch(action)
        }
        else{
          const action = {
            type: "newFavorite",
            payload: ch.name
      }
      dispatch(action)
    }
  }
  console.log(isFavorite);
  

  return (
    <div className="card carta2 me-3" style={{ width: "18rem" }}>
      <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">
          {ch.name}</h5>
        <div className="d-flex justify-content-between mt-3">
          <a href="" className="btn btn-primary"
            onClick={() => {
              navigate(`/description/${ch.uid}`)
            }}>Leer mas...</a>
          <button type="button" className="btn btn-outline-warning"
            onClick={handleFavorite}>
            <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard