import React, { useEffect, useState } from 'react'
import CarHeader from './CarHeader'
import axios from 'axios'

const ViewAllCar = () => {
    const [car, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
useEffect(
    () => {
        fetchData()
    }, []
)
    return (
        <>
            <CarHeader />
            <div className="container mt-4">
                <div className="row g-4">
                    {car.map((c) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={c.carId}>
                            <div className="card h-100 shadow">

                                <img
                                    src={c.image}
                                    className="card-img-top"
                                    alt={c.brand}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />

                                <div className="card-body text-center">
                                    <h5>{c.brand} {c.model}</h5>
                                    <p><strong>Fuel:</strong> {c.fuelType}</p>
                                    <p><strong>Color:</strong> {c.color}</p>
                                    <h6 className="text-success">₹{c.price}</h6>

                                    <button className="btn btn-primary w-100">
                                        Book Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ViewAllCar