import React from 'react';
import classnames from 'classnames';
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap';

import SearchHeader from 'components/Headers/SearchHeader.js';

class Faq extends React.Component {
  render() {
    return (
      <>
        <SearchHeader name="Resultado da busca: " parentName="Components" />
        <Container className="mt--6" fluid>
          <Row className="card-wrapper">
            <Col lg="4">
              <Col
                xs="12"
                lg="4"
                style={{
                  'overflow-x': 'scroll',
                  display: 'flex',
                  'flex-direction': 'column',
                  padding: 0,
                  marginBottom: '100px',
                }}
              ></Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Faq;
