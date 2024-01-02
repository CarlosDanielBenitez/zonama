// MyComponent.js
import React from 'react';
import useApi from '../../api/useApi';
import AtomicSpinner from 'atomic-spinner';


const MyComponent = () => {
  const apiUrl = 'https://randomuser.me/api/'; 

  const { data, loading, error } = useApi(apiUrl);

  if (loading) {
    return <AtomicSpinner size="50px" color="#007BFF" />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
     
    </div>
  );
};

export default MyComponent;
