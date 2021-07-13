import React from 'react';
import classnames from 'classnames';
import { Button, Card, CardBody, Container, Row, Col } from 'reactstrap';

import SearchHeader from 'components/Headers/SearchHeader.js';

const list = [
  {
    name: 'Nome da ong 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.iure repellat, soluta, optio minus ut reiciendis voluptates',
  },
  {
    name: 'Nome da ong 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.iure repellat, soluta, optio minus ut reiciendis voluptates',
  },
  {
    name: 'Nome da ong 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.iure repellat, soluta, optio minus ut reiciendis voluptates',
  },
  {
    name: 'Nome da ong 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.iure repellat, soluta, optio minus ut reiciendis voluptates',
  },
];

class Search extends React.Component {
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
              >
                {list.map((item) => (
                  <Card className="col-12" style={{ padding: 0 }}>
                    <CardBody>
                      <Row className="align-items-center">
                        <Col className="col-auto">
                          <a
                            className="avatar avatar-xl rounded-circle"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={require('assets/img/theme/team-2.jpg')}
                            />
                          </a>
                        </Col>
                        <div className="col ml--2">
                          <h4 className="mb-0">
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              John Snow
                            </a>
                          </h4>
                          <p className="text-sm text-muted mb-0">
                            Working remoteley
                          </p>
                          <span className="text-success mr-1">●</span>
                          <small>Active</small>
                        </div>
                        <Col className="col-auto">
                          <Button color="primary" size="sm" type="button">
                            Add
                          </Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                ))}
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Search;
