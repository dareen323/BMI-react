import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
export default class Footer extends Component {
  render(){
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
            dareen
        </div>
      </MDBFooter>
    );
}
}