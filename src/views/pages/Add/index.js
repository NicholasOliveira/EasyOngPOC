import React from 'react';
import classnames from 'classnames';
import {
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
} from 'reactstrap';
import ReactQuill from 'react-quill';
import Header from 'components/Headers/MyProfileHeader.js';

class Add extends React.Component {
  state = {};

  handleReactQuillChange = (value) => {
    this.setState({
      reactQuillText: value,
    });
  };

  render() {
    return (
      <>
        <Header name="Resultado da busca: " parentName="Components" />
        <Container className="mt--6" fluid>
          <Row className="card-wrapper">
            <Col lg="6">
              <div className="card-wrapper">
                <Card>
                  <CardHeader>
                    <h3 className="mb-0">Preencha os dados</h3>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <InputGroup
                              className={classnames('input-group-merge', {
                                focused: this.state.yourName,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fas fa-user" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Nome Completo"
                                type="text"
                                onFocus={(e) =>
                                  this.setState({ yourName: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ yourName: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <InputGroup
                              className={classnames('input-group-merge', {
                                focused: this.state.emailAddress,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="fas fa-envelope" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                onFocus={(e) =>
                                  this.setState({ emailAddress: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ emailAddress: false })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <InputGroup
                              className={classnames('input-group-merge', {
                                focused: this.state.location,
                              })}
                            >
                              <Input
                                placeholder="Cidade, Estado"
                                type="text"
                                onFocus={(e) =>
                                  this.setState({ location: true })
                                }
                                onBlur={(e) =>
                                  this.setState({ location: false })
                                }
                              />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <i className="fas fa-map-marker" />
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Card
                  style={{
                    marginBottom: '100px',
                  }}
                >
                  <CardHeader>
                    <h3 className="mb-0">Descrição:</h3>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <div
                        data-quill-placeholder="Quill WYSIWYG"
                        data-toggle="quill"
                      />
                      <ReactQuill
                        /*  value={this.state.reactQuillText}
                        onChange={this.handleReactQuillChange} */
                        theme="snow"
                        modules={{
                          toolbar: [
                            ['bold', 'italic'],
                            ['link', 'blockquote', 'code', 'image'],
                            [
                              {
                                list: 'ordered',
                              },
                              {
                                list: 'bullet',
                              },
                            ],
                          ],
                        }}
                      />
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Add;
