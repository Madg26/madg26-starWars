import React from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobalReducer from '../hooks/useGlobalReducer'

const Planets = ({pl}) => {
    const {store, dispatch} = useGlobalReducer();
    const isFavorite = store.favorites.includes(pl.name)
    const handleFavorite = () => {
      if (isFavorite === true) {
        const action = {
          type: "removeFavorite",
          payload: pl.name
        }
        dispatch(action)
          }
          else{
            const action = {
              type: "newFavorite",
              payload: pl.name
        }
        dispatch(action)
      }
    }
    console.log(isFavorite);
    const navigate = useNavigate()
    return (
        <div className="card carta2 me-3" style={{ width: "18rem" }}>
            <img src="https://lumiere-a.akamaihd.net/v1/images/databank_admiralcoburn_01_169_8db29cff.jpeg?region=0%2C0%2C1560%2C878" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">
                    {pl.name}</h5>
                <div className="d-flex justify-content-between mt-3">
                    <a href="" className="btn btn-primary"
                    onClick={()=>{
                        navigate(`/planet-description/${pl.uid}`)
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

export default Planets