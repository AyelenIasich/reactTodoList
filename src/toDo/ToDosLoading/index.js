import React from 'react';
import './ToDosLoading.css';

function ToDosLoading() {
  return (
    <div className="loadingTodo-container">
      <div className="loading-circle"></div>
      <div className="loading-text"></div>
      <div className="loading-delete-icon"></div>
    </div>
  );
}

export default ToDosLoading;
