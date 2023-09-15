import React from 'react'
import { FilterContainer } from './FilterElements'

const Filter = () => {
  return (
    <FilterContainer>

        <h1 className='filterHead' >Filter</h1>
        <div className="filterTypes">
          <h4 className="filterTypeHead">Job type</h4>
          <h4 className='head' >all(284)</h4>
          <div className="filter">
            <p className="filterType">full Time (146)</p>
            <p className="filterType">Part Time (32)</p>
            <p className="filterType"> Contract (18) </p>
            <p className="filterType">Internship (81)</p>
            <p className="filterType">Freelance (7)</p>
          </div>

        </div>
        <div className="filterTypes">
          <h4 className="filterTypeHead">Location</h4>
          <h4 className='head' >Chicago, Il (284) </h4>
          <div className="filter">
            <p className="filterType">Niles, IL (46)</p>
            <p className="filterType">Oak Brook, IL (39)</p>
            <p className="filterType">Northbrook, IL (37) </p>
            <p className="filterType">Skokie, Il (34)</p>
            <p className="filterType">Freelance (7)</p>
          </div>

        </div>
        <div className="filterTypes">
          <h4 className="filterTypeHead">Company</h4>
          <h4 className='head' >all(284)</h4>
          <div className="filter">
            <p className="filterType">Abbott (32)</p>
            <p className="filterType">Drivative Solutions (18)</p>
            <p className="filterType">Cars.com (29) </p>
            <p className="filterType">Caterpillar Inc. (27)</p>
            <p className="filterType">Zebra Technologies (24)</p>
          </div>

        </div>
    </FilterContainer>
  )
}

export default Filter