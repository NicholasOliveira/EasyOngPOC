import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
import classnames from 'classnames';
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header bg-info pb-6"
          style={{
            paddingTop: '20px',
          }}
        >
          <Container fluid>
            <div className="header-body">
              <Row className="align-items-center py-4">
                <Col lg="6" xs="7">
                  <h6 className="h2 text-white d-inline-block mb-0">
                    {this.props.name}
                  </h6>{' '}
                  <Breadcrumb
                    className="d-none d-md-inline-block ml-md-4"
                    listClassName="breadcrumb-links breadcrumb-dark"
                  >
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-home" />
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {this.props.parentName}
                      </a>
                    </BreadcrumbItem>
                    <BreadcrumbItem aria-current="page" className="active">
                      {this.props.name}
                    </BreadcrumbItem>
                  </Breadcrumb>
                </Col>
                <Col className="text-right" lg="6" xs="5">
                  <Button
                    className="btn-neutral"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <NavLink to="/admin/Ongs" tag={Link}>
                      <i className="ni ni-bold-left" />
                      Voltar
                    </NavLink>
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

SearchHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default SearchHeader;
