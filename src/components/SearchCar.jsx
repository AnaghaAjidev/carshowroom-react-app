import React from 'react'
import CarHeader from './CarHeader'

const SearchCar = () => {
  return (
    <>
    <CarHeader/>
    <div className="container mt-5">
      <div className="card p-4 shadow col-md-6 mx-auto">
        <h3 className="text-center mb-3">Search Car</h3>

        <label className="form-label">Car ID</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Car ID"
        />

        <button className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
    </>
  )
}

export default SearchCar