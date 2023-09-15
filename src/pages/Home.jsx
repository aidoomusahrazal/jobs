import React from 'react'
import Filter from '../components/Filter/Filter'
import Jobs from '../components/Jobs/Jobs'
import Popular from '../components/Popular/Popular'
import styled from 'styled-components'

const Home = () => {

  return (
    <HomePage>
      <div className="filterComponent">
      <Filter />
      </div>
   
    <Jobs/>
    
    <div className="popularComponent">
    <Popular/>
    </div>
    </HomePage>
  )
}

const HomePage = styled.div`
 width: 100%;
 height: fit-content;
 display: flex;
 justify-content: space-between;
 /* align-items: center; */
 background-color: #eeeeee61;
 position: relative;

 .filterComponent, .popularComponent {
  width: 20%;
  height: fit-content;
  display: flex;
  flex-direction: column;
 }

@media screen and (max-width: 430px) {
  .filterComponent, .popularComponent {
    display: none;
  }
}
`

export default Home