import React, { Component } from 'react';

export default class Questionlist extends Component {
  render() {
    const { questionlist } = this.props;

    if (questionlist.length > 0) {
      return (
        <>
          {questionlist.map((e) => (
            <button
              type='button'
              className='btn btn-secondary btn-block m-2 p-2'
            >
              <h2>{e.name}</h2>

              <div className='d-flex  justify-content-center'>
                Description: {e.description}
              </div>

              <div className='d-flex  justify-content-center'>
                Contributor: {e.contributor_name}
              </div>
            </button>
          ))}
        </>
      );
    } else {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <h3 style={{ color: 'black' }}>No Data Found</h3>{' '}
        </div>
      );
    }
  }
}
