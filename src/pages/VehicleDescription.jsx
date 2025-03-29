import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VehicleDescription = () => {
    const [vehicles, setVehicles] = useState();
    const { uid } = useParams();
    function vehiclesApi() {
        fetch("https://www.swapi.tech/api/starships/" + uid)
            .then((response) => { return response.json() })
            .then((data) => {
                console.log(data.result.properties);
                setVehicles(data.result.properties)
            })
            .catch((err) => { return err })
    }
    useEffect(() => {
        vehiclesApi()
    }, [])

    return (
        <div className=" d-flex justify-content-center">
            <div className="card mb-3 text-center" style={{ "maxWidth": "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{vehicles && vehicles.name}</h5>
                            <p className="card-text">
                                <strong>Tipo:</strong> {vehicles && vehicles.starship_class}<br />
                                <strong>Creado por:</strong> {vehicles && vehicles.manufacturer}<br />
                                <strong>Modelo:</strong> {vehicles && vehicles.model}
                            </p>
                            <p className="card-text"><small className="text-body-secondary"></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleDescription