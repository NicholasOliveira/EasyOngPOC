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
  UncontrolledTooltip,
} from 'reactstrap';

import CardsHeader from 'components/Headers/CardsHeader.js';

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

class Favorites extends React.Component {
  render() {
    return (
      <>
        <CardsHeader name="Favoritos" parentName="Components" />
        <Container className="mt--6" fluid>
          <Row className="card-wrapper">
            <Col
              xs="12"
              lg="4"
              style={{
                display: 'flex',
                'flex-direction': 'column',
                marginBottom: '100px',
              }}
            >
              {list.map((item) => {
                return (
                  <Card className="col-12" style={{ padding: 0 }}>
                    <CardImg
                      alt="..."
                      src={require('assets/img/theme/img-1-1000x600.jpg')}
                      top
                    />
                    <ListGroup flush>
                      <ListGroupItem>Cras justo odio</ListGroupItem>
                      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                      <ListGroupItem>
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Go somewhere
                        </Button>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Favorites;
