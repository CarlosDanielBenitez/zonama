import React, { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import AtomicSpinner from 'atomic-spinner';
import "./styles.css"

const About = () => {
  const apiURL = 'https://jsonplaceholder.typicode.com/users';
  const { userData, setUserData } = useUser();
  const [loading, setLoading] = useState(true);
  const [userIndex, setUserIndex] = useState(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiURL);
      const users = await response.json();

      // Considera ajustar esto según la estructura real de tus datos
      const user = users[userIndex];
      setUserData({
        name: `${user?.name  ?? "Name not available"} `,
        email: `${user?.email ?? "Email not available"}`,
         phone: `${user?.phone ?? "Phone not available"}`,
         website: `${user?.website ?? "Website not available"}`
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiURL, setUserData, userIndex]);

  const handleNextUser = () => {
    setUserIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div>
      {loading ? (
        <AtomicSpinner/>
      ) : (
        <div className='content'>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Website: {userData.website}</p>

          <button type='button' className='change' onClick={handleNextUser}>Siguiente Usuario</button>
          
        </div>
      )}
    </div>
  );
};

export default About;
