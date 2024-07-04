import React from 'react';

const LocalImage = ({ path, alt }) => {
  return (
    <div>
      <img src={require(`@site/static${path}`).default} alt={alt} />
    </div>
  );
};

export default LocalImage;