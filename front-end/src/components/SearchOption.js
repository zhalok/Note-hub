import React, { useState } from 'react';
import searchImage from '../images/search.png';

export default function SearchOption(props) {
  const [searchVal, searchValController] = useState('search here');
  const { findByNameController } = props;

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
        value={searchVal}
        placeholder='search'
        onChange={(e) => {
          searchValController(e.target.value);
        }}
      ></input>

      <button
        type='button'
        className='btn btn-success'
        style={{ marginTop: '10px', height: '100%' }}
        onClick={() => {
          findByNameController(searchVal);
        }}
      >
        <img src={searchImage} style={{ height: '20px' }} />
      </button>
    </div>
  );
}
