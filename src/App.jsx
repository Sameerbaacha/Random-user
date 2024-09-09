import './App.css'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [user, setuser] = useState(null)
  const [next, setnext] = useState(0)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const { results } = await response.json();
        setuser(results[0]);

      } catch (error) {
        console.log("error", error.message);
      }
    }
    getData();
  }, [next])
console.log(user)
  return (
    <div className='tex'>
      <h1 className='h1'>User Profile</h1>
      {
        user && (
          <div className='card'>
            <div className='usercard'>
              {user.picture && <img src={user.picture.large} alt={user.name?.first + " image"} />}
              <p>Full name : {user.name?.first} {user.name?.last}</p>
              <p>Gender : {user.gender}</p>
              <p>Phone : {user.cell}</p>
              <p>Email : {user.email}</p>
              <p>Age : {user.dob?.age}</p>
              <p>Date : {user.dob?.date}</p>
              <p>Country : {user.location?.city}, {user.location?.country}</p>
              <button className='btn' onClick={() => { setnext(next + 1) }}>next</button>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default App