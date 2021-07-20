
import React from "react";
import ReactQuill from "react-quill";

// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
import {
  Label,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import Button from "reactstrap/lib/Button";

class Faq extends React.Component {
  render() {
    return (
      <>

        <Container className="mt--6" fluid style={{
                          marginBottom: "100px",
                        }}>

           <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
   <Card className="mb-4">
            <CardHeader>
              <h3 className="mb-0">Fale conosco</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example3cols1Input"
                    >
                      Nome completo
                    </label>
                    <Input
                      id="example3cols1Input"
                      placeholder="Nome completo"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example3cols2Input"
                    >
                      Endereço
                    </label>
                    <Input
                      id="example3cols2Input"
                      placeholder="Endereço"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example3cols3Input"
                    >
                      Telefone
                    </label>
                    <Input
                      id="example3cols3Input"
                      placeholder="Telefone"
                      type="text"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="3" sm="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example4cols1Input"
                    >
                     Email
                    </label>
                    <Input
                      id="example4cols1Input"
                      placeholder="Email"
                      type="text"
                    />
                  </FormGroup>
                </Col>


                </Row>
                  <Row>
                  <Col md="3" sm="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="example4cols1Input"
                    >
                     Mensagem
                    </label>
                   
                      <div
                        data-quill-placeholder="Quill WYSIWYG"
                        data-toggle="quill"
                      />
                      <ReactQuill
                        theme="snow"
                        modules={{
                          toolbar: [
                            ["bold", "italic"],
                            ["link", "blockquote", "code", "image"],
                            [
                              {
                                list: "ordered"
                              },
                              {
                                list: "bullet"
                              }
                            ]
                          ]
                        }}
                      />
                    </FormGroup>


                    <Button
                        color="primary"
                        type="button"
                        onClick={this.validateCustomStylesForm}
                      >
                        Enviar solicitação
                      </Button>
                </Col>

              </Row>
            
            </CardBody>
          </Card>
            </Col>
          </Row>
          
        </Container>
      </>
    );
  }
}

export default Faq;
