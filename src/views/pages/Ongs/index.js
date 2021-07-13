import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Progress,
  Table,
  Container,
  Row,
  Col,
  NavLink,
} from 'reactstrap';

import CardsHeader from 'components/Headers/CardsHeader.js';
import { Link } from 'react-router-dom';

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

class Cards extends React.Component {
  render() {
    return (
      <>
        <CardsHeader name="Ongs sugeridas" parentName="Components" />
        <Container className="mt--6" fluid>
          <Row className="card-wrapper">
            <Col
              xs="12"
              lg="4"
              style={{
                'overflow-x': 'scroll',
                display: 'flex',
                'flex-direction': 'row',
              }}
            >
              {list.map((item) => {
                return (
                  <NavLink
                    to="/admin/detail"
                    tag={Link}
                    color="primary"
                    className="col-11 card"
                    style={{ padding: 0, marginRight: '15px' }}
                  >
                    <Card
                      className="col-12"
                      style={{
                        padding: 0,
                        marginRight: '15px',
                        marginBottom: '0px',
                      }}
                    >
                      <CardImg
                        alt="..."
                        src={require('assets/img/theme/img-1-1000x600.jpg')}
                        top
                      />

                      <CardBody>
                        <CardTitle className="mb-3" tag="h3">
                          {item.name}
                        </CardTitle>
                        <CardText className="mb-4">{item.description}</CardText>
                        <Button color="primary">Go somewhere</Button>
                      </CardBody>
                    </Card>
                  </NavLink>
                );
              })}
            </Col>

            <Col
              xs="12"
              lg="4"
              style={{
                display: 'flex',
                'flex-direction': 'column',
              }}
            >
              <div className="text-left">
                <h5 className="h3">Top 4 Ongs mais acessadas:</h5>
              </div>

              <Col
                xs="12"
                lg="4"
                style={{
                  'overflow-x': 'scroll',
                  display: 'flex',
                  'flex-direction': 'row',
                  padding: 0,
                }}
              >
                <Col
                  xs="11"
                  md="6"
                  xl="3"
                  style={{
                    padding: 0,
                    marginRight: '15px',
                  }}
                >
                  <Card className="bg-gradient-primary border-0 col-11">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Nome da Ong
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            834 favoritos
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="30"
                            color="success"
                          />
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-sm">
                        <a
                          className="text-nowrap text-white font-weight-600"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See details
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xs="11"
                  md="6"
                  xl="3"
                  style={{
                    padding: 0,
                    marginRight: '15px',
                  }}
                >
                  <Card className="bg-gradient-info border-0 col-11">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Nome da Ong
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            734 favoritos
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="50"
                            color="success"
                          />
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-sm">
                        <a
                          className="text-nowrap text-white font-weight-600"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See details
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xs="11"
                  md="6"
                  xl="3"
                  style={{
                    padding: 0,
                    marginRight: '15px',
                  }}
                >
                  <Card className="bg-gradient-danger border-0 col-11">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Nome da Ong
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            634 favoritos
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="80"
                            color="success"
                          />
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-sm">
                        <a
                          className="text-nowrap text-white font-weight-600"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See details
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col
                  xs="11"
                  md="6"
                  xl="3"
                  style={{
                    padding: 0,
                    marginRight: '15px',
                  }}
                >
                  <Card className="bg-gradient-default border-0 col-11">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0 text-white"
                          >
                            Nome da Ong
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0 text-white">
                            534 favoritos
                          </span>
                          <Progress
                            className="progress-xs mt-3 mb-0"
                            max="100"
                            value="90"
                            color="success"
                          />
                        </div>
                      </Row>
                      <p className="mt-3 mb-0 text-sm">
                        <a
                          className="text-nowrap text-white font-weight-600"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See details
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Col>
            </Col>
            <Col lg="4">
              <div className="text-left">
                <h5 className="h3">Ongs que talves você curta:</h5>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2" />
                  Brasil
                </div>
              </div>
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
                  <NavLink
                    to="/admin/detail"
                    tag={Link}
                    color="primary"
                    className="col-12 card"
                    style={{ padding: 0, background: 'none' }}
                  >
                    <Card
                      className="col-12"
                      style={{ padding: 0, marginBottom: '0px' }}
                    >
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
                  </NavLink>
                ))}
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Cards;
