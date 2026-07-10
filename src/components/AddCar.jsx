import React from 'react'
import CarHeader from './CarHeader'

const AddCar = () => {
  return (
    <>
    <CarHeader/>
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">Add Car</h2>

        <div className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Car ID</label>
            <input type="text" className="form-control" placeholder="Enter Car ID" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Brand</label>
            <input type="text" className="form-control" placeholder="Enter Brand" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Model</label>
            <input type="text" className="form-control" placeholder="Enter Model" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Fuel Type</label>
            <input type="text" className="form-control" placeholder="Enter Fuel Type" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Transmission</label>
            <input type="text" className="form-control" placeholder="Enter Transmission" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Price</label>
            <input type="number" className="form-control" placeholder="Enter Price" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Color</label>
            <input type="text" className="form-control" placeholder="Enter Color" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Manufacturing Year</label>
            <input type="number" className="form-control" placeholder="Enter Manufacturing Year" />
          </div>

          <div className="col-12">
            <label className="form-label">Image URL</label>
            <input type="url" className="form-control" placeholder="Enter Image URL" />
          </div>

          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter Description"
            ></textarea>
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-success px-4">
              Add Car
            </button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default AddCar