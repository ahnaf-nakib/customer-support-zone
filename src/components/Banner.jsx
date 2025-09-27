import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="banner">
     
      <div className="banner-stats">
        <div className="stat-card in-progress-card">
          <p>In-Progress</p>
          <p className="count">{inProgressCount}</p>
        </div>
        <div className="stat-card resolved-card">
          <p>Resolved</p>
          <p className="count">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;