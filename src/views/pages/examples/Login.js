import React from 'react';
// nodejs library that concatenates classes
import { Link } from 'react-router-dom';
import classnames from 'classnames';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavItem,
  NavLink,
  Nav,
} from 'reactstrap';
// core components
import AuthHeader from 'components/Headers/MyHeader.js';

class Login extends React.Component {
  state = {};
  render() {
    return (
      <>
        <AuthHeader title="Fazer login" />
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Col lg="5" md="7">
              <Card className="bg-secondary border-0 mb-0">
                <CardHeader className="bg-transparent pb-5">
                  <div className="text-muted text-center mt-2 mb-3">
                    <small>Fazer login com</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="..."
                          src={require('assets/img/icons/common/github.svg')}
                        />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <img
                          alt="..."
                          src={require('assets/img/icons/common/google.svg')}
                        />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <small>Ou digite suas credenciais</small>
                  </div>
                  <Form role="form">
                    <FormGroup
                      className={classnames('mb-3', {
                        focused: this.state.focusedEmail,
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          onFocus={() => this.setState({ focusedEmail: true })}
                          onBlur={() => this.setState({ focusedEmail: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                      className={classnames({
                        focused: this.state.focusedPassword,
                      })}
                    >
                      <InputGroup className="input-group-merge input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Senha"
                          type="password"
                          onFocus={() =>
                            this.setState({ focusedPassword: true })
                          }
                          onBlur={() =>
                            this.setState({ focusedPassword: false })
                          }
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                      >
                        <span className="text-muted">Lembrar</span>
                      </label>
                    </div>
                    <div className="text-center">
                      <Button className="my-4" color="info" type="button">
                        <NavLink to="/admin/ongs" tag={Link}>
                          Efetuar login
                        </NavLink>
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <NavLink className="text-light" to="/auth/lock" tag={Link}>
                    <small>Esqueceu a senha?</small>
                  </NavLink>
                </Col>
                <Col className="text-right" xs="6">
                  <NavLink
                    className="text-light"
                    to="/auth/register"
                    tag={Link}
                  >
                    <small>Criar sua conta</small>
                  </NavLink>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Login;
