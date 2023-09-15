import React, {useState} from 'react'
import { JobsContainer } from './JobsElements'
import { AiFillFileAdd } from 'react-icons/ai'
import jobs from './../../jobs'
import Filter from './../Filter/Filter'
import Popular from './../Popular/Popular'
import SearchBar from '../SearchBar/SearchBar'


const Jobs = () => {

  const [showFilter, setShowFilter] = useState(false)
  const [showPopular, setShowPopular] = useState(false)

  return (
    <JobsContainer>
      <SearchBar />
      <div className="onMobile" >

        <button className="showFilter"  onClick={() => { setShowFilter(!showFilter) }}  >
          filter
          </button>
        {
          showFilter && <Filter />
        }

        <button className="showPopular"  onClick={() => { setShowPopular(!showPopular) }} >Show Popular jobs</button>
        {
          showPopular && <Popular />
        }  
      </div>
        <div className="upload">
            <div className="uploadIcon">
            <AiFillFileAdd className='icon' />
            </div>
            <div className="inputs">
            <input type="file" id='uploadResume' />
            <label htmlFor="uploadResume">Upload Your Resume</label>
            <p>We'll match you with the best jobs, Right job, Right away!</p>
            </div>
        </div>

        <div className="jobs">
          <div className="foundJobs">
            <div className="found">300 results found</div>
            <div className="sort">
              sort By: 
              <select name="" id="">
                <option value="data posted">Date posted</option>
                <option value="Location">Location</option>
                <option value="Job Type">Job Type</option>
              </select>
            </div>
          </div>
          <div className="availableJobs">
            {
              jobs.map((job) => {
                return (
              <div key={job.id} className="job">
              <div className="jobDetails">
                <div className="companyLogo">
                  <img src={job.company_logo} alt="company_logo" />
                </div>
                <div className="details">
                <h4 className='jobTitle' > {job.job_title} </h4>
                  <p className="jobLocation"> {job.location} </p>

                
                </div>
            
                

              </div>
              <div className="otherDetails">
                    <div className="requirement"> 
                    <p>Experience</p>
                    <p className='mainRequirement'>{job.experience} </p>
                    </div>
                    <div className="requirement"> 
                    <p>Job Type</p>
                    <p className='mainRequirement'>{job.job_type}</p> 
                    </div>
                    <div className="requirement"> 
                    <p>Salary</p>
                    <p className='mainRequirement'>{job.salary} </p>
                    </div>
                  </div>
              <div className="timePosted">
                <p className="time"> Posted {job.minutes_posted} minutes ago</p>
                <p className="save"> Save Job </p>
              </div>
            </div>
                )
              })
            }
            
          </div>
        </div>
    </JobsContainer>
  )
}

export default Jobs