import React from 'react';

const Image = ({ path, alt }) => {
  return (
    <div>
      <img src={require(`@site/static${path}`).default} alt={alt} />
    </div>
  );
};

export default Image;