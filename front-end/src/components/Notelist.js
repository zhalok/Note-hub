import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Notelist extends Component {
  render() {
    const { notelist } = this.props;

    if (notelist.length > 0) {
      return (
        <>
          {notelist.map((e) => (
            <ContentCard info={e} />
          ))}
        </>
      );
    } else {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <h3 style={{ color: 'black' }}> No Data Found </h3>{' '}
        </div>
      );
    }
  }
}
