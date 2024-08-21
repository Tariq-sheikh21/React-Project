import React from 'react';

// Destructure props directly in the function parameters
const Greeting = ({ name, age, email }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Email: {email}</h2>
    </>
  );
};

export default Greeting;
