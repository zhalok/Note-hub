import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/books.png';

export default class Booklist extends Component {
  render() {
    const { booklist } = this.props;

    if (booklist.length > 0) {
      return (
        <div style={{ padding: '20px' }}>
          {booklist.map((e) => (
            <div
              className='card'
              style={{
                width: '40rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'row',
                padding: '20px',
                marginTop: '10px',
              }}
            >
              <img
                class='card-img-top'
                src={image}
                alt='Card image cap'
                style={{
                  height: '10%',
                  width: '10%',
                  display: 'flex',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: '20px',
                }}
              />
              <div class='card-body'>
                <h2 class='card-title'>{e.name}</h2>
                <p style={{ fontSize: '15px' }}>{e.contributor_name}</p>
                <p class='card-text'>A very very Noice Math BOOk</p>
                <div style={{ display: 'flex' }}>
                  <Link
                    type='button'
                    className='btn btn-outline-primary'
                    style={{
                      display: 'flex',
                      marginLeft: 'auto',
                      width: 'fit-content',
                      marginRight: '10px',
                    }}
                  >
                    Preview
                  </Link>
                  <Link
                    type='button'
                    className='btn btn-primary'
                    style={{
                      display: 'flex',

                      width: 'fit-content',
                    }}
                  >
                    Go to link
                  </Link>
                </div>
              </div>
            </div>
            // <button
            //   type='button'
            //   className='btn btn-secondary btn-block m-2 p-2'
            // >
            //   <h2>{e.name}</h2>
            //   <div className='d-flex mt-2 justify-content-center'>
            //     Description: {e.description}
            //   </div>

            //   <div className='d-flex  justify-content-center'>
            //     Contributor: {e.contributor_name}
            //   </div>
            // </button>
          ))}
        </div>
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
