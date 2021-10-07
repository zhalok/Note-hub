import React from 'react';
import searchImage from '../images/search.png';

export default function SearchOption() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        height: 'fit-content',
      }}
    >
      <input
        type='search'
        className='form-control'
        id='form1'
        style={{ marginTop: '10px', marginRight: '10px' }}
        placeholder='search'
      ></input>

      <button
        type='button'
        className='btn btn-success'
        style={{ marginTop: '10px', height: '100%' }}
      >
        <img src={searchImage} style={{ height: '20px' }} />
      </button>
    </div>
  );
}
