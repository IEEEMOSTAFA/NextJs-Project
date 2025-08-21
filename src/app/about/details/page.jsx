import React from 'react';
  const isError = false; // বা condition
  if (isError) {
    throw new Error("Something went wrong in the About page");
  }

const aboutPage = () => {
    return (
        <div>
      <h1>About Us</h1>
      <p>This is the about page of our blog.</p>
    </div>
    );
};

export default aboutPage;