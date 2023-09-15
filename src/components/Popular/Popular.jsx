import React, {useState} from 'react'
import { PopularContainer } from './PopularElements'
import availableJobs from './../../availableJobs'

const Popular = () => {

  const [showSubscribe, setShowSubscribe] = useState(true)

  const handleSubscribe = () => {
    setShowSubscribe(!showSubscribe)
  }
  return (
    <PopularContainer>
      {
        showSubscribe ?    
        <div className="subscribe">
        <h2 className='popularHead' >Be the first to see new jobs in <span>Chicago, Il</span> </h2>
        <div className="emailCard">
         <label htmlFor="Email">Email</label>
         <input type="email" name="Email" id="" />
        </div>
        <button className="interested">Subscribe Now</button>
        <button onClick={handleSubscribe} className="noInterest">Not interested. Hide Now.</button>
        </div>
        : ""
      }
         <div className="popular">
          <h2 className="popularHead">Popular in  <span>Chicago</span> </h2>
          <div className="jobs">
            {
              availableJobs.map((availableJob) => {
                return (
                  <div key={availableJob} className="job">
                  <div className="logo">
                    <img src={availableJob.company_logo} alt="" />
                  </div>
                  <div className="txt">
                    <h4 className="companyName">
                      {availableJob.company_name}
                    </h4>
                    <p className="availableJobs">
                      {availableJob.jobs_available}
                    </p>
                  </div>
                </div>
                )
              })
            }
           
          </div>
         </div>
    </PopularContainer>
  )
}

export default Popular