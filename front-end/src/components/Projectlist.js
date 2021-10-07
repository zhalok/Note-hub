import React, { Component } from 'react';
import ContentCard from './ContentCard';

export default class Projectlist extends Component {
  render() {
    const { projectlist } = this.props;

    if (projectlist.length > 0) {
      return (
        <>
          {projectlist.map((e) => (
            <ContentCard info={e} />
          ))}
        </>
      );
    } else {
      return (
        <div className='d-flex justify-content-center mt-5'>
          <h3 style={{ color: 'black' }}> No Data Found</h3>{' '}
        </div>
      );
    }
  }
}
