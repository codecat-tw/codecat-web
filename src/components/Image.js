import React from 'react';

const Image = ({ path, alt }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <div style={containerStyle}>
      <img src={require(`@site/static${path}`).default} alt={alt} style={imageStyle} />
    </div>
  );
};

export default Image;