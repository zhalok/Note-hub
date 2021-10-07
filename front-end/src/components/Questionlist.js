import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Questionlist extends Component {
  render() {
    const { questionlist } = this.props;

    if (questionlist.length > 0) {
      return (
        <>
          {questionlist.map((e) => (
            <ContentCard info={e} />
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
