import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

class MyHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-6 d-flex align-items-center"
          style={{
            minHeight: '210px',
            backgroundImage:
              'url("' + require('assets/img/theme/header.jpg') + '")',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <span className="mask bg-gradient-info opacity-8" />
        </div>
      </>
    );
  }
}

export default MyHeader;
