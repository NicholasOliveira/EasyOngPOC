/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

class Calendar extends React.Component {
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

  render() {
    return (
      <>
        <Container
          fluid
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
            boxShadow: '0px -2px 7px rgb(0 0 0 / 20%)',
          }}
        >
          <footer className="footer pt-0">
            <Row className="align-items-center justify-content-lg-between">
              <Col xs="12" lg="6">
                <ul className="listItens">
                  <NavLink to="/admin/ongs" tag={Link}>
                    <li>
                      <i className="ni ni-world" />
                      Explorar
                    </li>
                  </NavLink>
                  <NavLink to="/admin/favorites" tag={Link}>
                    <li>
                      <i className="ni ni-favourite-28" />
                      Favoritos
                    </li>
                  </NavLink>
                  <NavLink to="/admin/add" tag={Link}>
                    <li className="add">
                      <i className="ni ni-fat-add" />
                    </li>
                  </NavLink>
                  <NavLink
                    to="/admin/search"
                    onClick={this.openSearch}
                    tag={Link}
                  >
                    <li>
                      <i className="ni ni-zoom-split-in" />
                      Buscar
                    </li>
                  </NavLink>
                  <NavLink to="/admin/profile" tag={Link}>
                    <li>
                      <i className="ni ni-single-02" />
                      Perfil
                    </li>
                  </NavLink>
                </ul>
              </Col>
            </Row>
          </footer>
        </Container>
      </>
    );
  }
}

export default Calendar;
