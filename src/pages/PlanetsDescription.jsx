import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PlanetsDescription = () => {
    const [planet, setPlanet] = useState();
    const { uid } = useParams();
    function planetsApi() {
        fetch("https://www.swapi.tech/api/planets/" + uid)
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data.result.properties);
                 setPlanet(data.result.properties)
            })
            .catch((err) => { return err })
    }
    useEffect(() => {
        planetsApi()
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
                        <h5 className="card-title">{planet && planet.name}</h5>
                        <p className="card-text">
                            <strong>Clima:</strong> {planet && planet.climate}<br/>
                            <strong>Diametro:</strong> {planet && planet.diameter}<br/>
                            <strong>Gravedad:</strong> {planet && planet.orbital_period}
                        </p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default PlanetsDescription