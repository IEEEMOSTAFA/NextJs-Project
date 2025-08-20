import React from 'react';
  const isError = false; // বা condition
  if (isError) {
    throw new Error("Something went wrong in the About page");
  }

const aboutPage = () => {
    return (
        <div>
            <p>About Page</p>
        </div>
    );
};

export default aboutPage;