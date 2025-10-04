import React from 'react';
import Review from './Review'
import "../styles/App.css"; 
const App = () => {
  return (
    <div className='main'>

      <div className='container'>
        <div>
          <h1 id='review-heading'>Our Reviews</h1>
          <Review />
        </div>
      </div>
    </div>
  );
}

export default App