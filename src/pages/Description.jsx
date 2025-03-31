import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Description = () => {
    const [character, setCharacter] = useState();
    const { uid } = useParams();
    function descriptionApi() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then((response) => { return response.json() })
            .then((data) => {
                setCharacter(data.result.properties)
            })
            .catch((err) => { return err })
    }

    useEffect(() => {
        descriptionApi()
    }, [])
    return (
        <div className=" d-flex justify-content-center">
            <div className="card mb-3" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{character && character.name}</h5>
                            <p className="card-text">
                                <strong>Color de piel:</strong> {character && character.skin_color}<br />
                                <strong>Color de ojos:</strong> {character && character.eye_color}<br />
                                <strong>Genero:</strong> {character && character.gender}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description