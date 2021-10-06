import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/books.png';
const BookCardStyle = require('../styles/ContentCardStyle');
const ContentCardImageStyle = require('../styles/ContentCardImageStyle');

export default class Booklist extends Component {
  render() {
    const { booklist } = this.props;

    if (booklist.length > 0) {
      return (
        <div style={{ padding: '20px' }}>
          {booklist.map((e) => (
            <div className='card' style={BookCardStyle}>
              <img
                class='card-img-top'
                src={image}
                alt='Card image cap'
                style={ContentCardImageStyle}
              />
              <div class='card-body'>
                <h2 className='display-5'>{e.name}</h2>
                <p className='blockquote-footer' style={{ fontSize: '15px' }}>
                  {e.contributor_name}
                </p>
                <p class='.lead'>A very very Noice Math BOOk</p>
                <div style={{ display: 'flex' }}>
                  <Link
                    type='button'
                    className='btn btn-outline-primary'
                    style={{
                      display: 'flex',
                      marginLeft: 'auto',
                      width: 'fit-content',
                      marginRight: '10px',
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
                      boxShadow:
                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
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
