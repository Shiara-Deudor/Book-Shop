import React from 'react'
import './home.scss';
import Featured from '../../layouts/featured/Featured';

const Home = () => {
  return (
    <section>
      <div className='landingPage'>
        <h2>
            “No book is really worth reading at the age of ten <br></br> 
        which is not equally – and often far more – worth reading 
        <br></br> at the age of fifty and beyond.” <br></br> C.S. Lewis
        </h2>
      </div>
      <Featured />
    </section>
  )
}

export default Home
