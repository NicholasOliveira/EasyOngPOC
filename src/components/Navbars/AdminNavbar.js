import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  ListGroupItem,
  ListGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AdminNavbar extends React.Component {
  // function that on mobile devices makes the search open
  openSearch = () => {
    document.body.classList.add('g-navbar-search-showing');
    setTimeout(function () {
      document.body.classList.remove('g-navbar-search-showing');
      document.body.classList.add('g-navbar-search-show');
    }, 150);
    setTimeout(function () {
      document.body.classList.add('g-navbar-search-shown');
    }, 300);
  };
  // function that on mobile devices makes the search close
  closeSearch = () => {
    document.body.classList.remove('g-navbar-search-shown');
    setTimeout(function () {
      document.body.classList.remove('g-navbar-search-show');
      document.body.classList.add('g-navbar-search-hiding');
    }, 150);
    setTimeout(function () {
      document.body.classList.remove('g-navbar-search-hiding');
      document.body.classList.add('g-navbar-search-hidden');
    }, 300);
    setTimeout(function () {
      document.body.classList.remove('g-navbar-search-hidden');
    }, 500);
  };
  render() {
    return (
      <>
        <Navbar
          className={classnames(
            'navbar-top navbar-expand border-bottom',
            { 'navbar-dark bg-info': this.props.theme === 'dark' },
            { 'navbar-light bg-secondary': this.props.theme === 'light' }
          )}
          style={{
            'visibility': 'hidden',
            'z-index': 999,
          }}
        >
          <Container
            style={{
              paddingTop: 25,
            }}
            fluid
          >
            <Collapse navbar isOpen={true} style={{
              display: 'none'
            }}>
              <Form
                className={classnames(
                  'navbar-search form-inline mr-sm-3',
                  { 'navbar-search-light': this.props.theme === 'dark' },
                  { 'navbar-search-dark': this.props.theme === 'light' }
                )}
              >
                <FormGroup className="mb-0">
                  <InputGroup className="input-group-alternative input-group-merge">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-search" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Buscar" type="text" />
                  </InputGroup>
                </FormGroup>
                <button
                  aria-label="Close"
                  className="close"
                  type="button"
                  onClick={this.closeSearch}
                >
                  <span aria-hidden={true}>??</span>
                </button>
              </Form>

              <Nav className="align-items-center ml-md-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link" color="" tag="a">
                    <i className="ni ni-bell-55" />
                  </DropdownToggle>
                  <DropdownMenu
                    className="dropdown-menu-xl py-0 overflow-hidden"
                    right
                  >
                    <div className="px-3 py-3">
                      <h6 className="text-sm text-muted m-0">
                        You have <strong className="text-info">13</strong>{' '}
                        notifications.
                      </h6>
                    </div>

                    <ListGroup flush>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require('assets/img/theme/team-1.jpg')}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Let's meet at Starbucks at 11:30. Wdyt?
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require('assets/img/theme/team-2.jpg')}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>3 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              A new issue has been reported for Argon.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require('assets/img/theme/team-3.jpg')}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>5 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Your posts have been liked a lot.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require('assets/img/theme/team-4.jpg')}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>2 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              Let's meet at Starbucks at 11:30. Wdyt?
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                      <ListGroupItem
                        className="list-group-item-action"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tag="a"
                      >
                        <Row className="align-items-center">
                          <Col className="col-auto">
                            <img
                              alt="..."
                              className="avatar rounded-circle"
                              src={require('assets/img/theme/team-5.jpg')}
                            />
                          </Col>
                          <div className="col ml--2">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="mb-0 text-sm">John Snow</h4>
                              </div>
                              <div className="text-right text-muted">
                                <small>3 hrs ago</small>
                              </div>
                            </div>
                            <p className="text-sm mb-0">
                              A new issue has been reported for Argon.
                            </p>
                          </div>
                        </Row>
                      </ListGroupItem>
                    </ListGroup>

                    <DropdownItem
                      className="text-center text-info font-weight-bold py-3"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      View all
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-center ml-auto ml-md-0" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link pr-0" color="" tag="a">
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={require('assets/img/theme/team-4.jpg')}
                        />
                      </span>
                      <Media className="ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          John Snow
                        </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="noti-title" header tag="div">
                      <h6 className="text-overflow m-0">Bem Vindo!</h6>
                    </DropdownItem>
                    <NavLink to="/admin/profile" tag={Link}>
                      <DropdownItem>
                        <i className="ni ni-single-02" />
                        <span>Meu Perfil</span>
                      </DropdownItem>
                    </NavLink>
                    <DropdownItem divider />
                    <NavLink to="/auth/login" tag={Link}>
                      <DropdownItem>
                        <i className="ni ni-user-run" />
                        <span>Sair</span>
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
AdminNavbar.defaultProps = {
  toggleSidenav: () => {},
  sidenavOpen: false,
  theme: 'dark',
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
};

export default AdminNavbar;
