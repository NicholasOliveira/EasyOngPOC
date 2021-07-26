
import React, { useState } from "react";
import ReactQuill from "react-quill";
import axios from 'axios';
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
import {
  FormGroup,
  Input,
} from "reactstrap";
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";

function Faq () {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [reason,setReason] = useState('');

   async function handleSubmit(e){
      e.preventDefault();
      const { data, status } = await axios.post('https://easyong.herokuapp.com/api/v1/auth/contact-us', {
        name,
        email,
        message,
        reason,
      });
      if(status < 299){
        alert(data.message);
        setName('')
        setEmail('')
        setMessage('')
        setReason('')
      }else{
        alert(data.message)
      }
    }
  return (
      <>

        <Container className="mt--6" 
          fluid 
          style={{
            marginBottom: "100px",
          }}>

          <Row className="justify-content-center">
          <Col className="card-wrapper" lg="8">
          <Card className="mb-4">
            <CardHeader>
              <h3 className="mb-0">Fale conosco</h3>
            </CardHeader>
            <CardBody>
            <Form onSubmit={handleSubmit}>
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
                      onChange={({ target: { value } }) => setName(value) }
                      value={name}
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
                       onChange={({ target: { value } }) => setEmail(value) }
                      value={email}
                    />
                  </FormGroup>
                </Col>
              </Row>
                
                <Row>
                  <Col md="3" sm="6">
                    <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="exampleFormControlSelect1"
                        >
                         Selecione o Motivo
                        </label>
                        <Input        id="exampleFormControlSelect1" type="select"
                          value={reason}
                          onChange={({ target: { value } }) => setReason(value) }
                        >
                          <option value="SUGGESTION">Sugestão</option>
                          <option value="PRAISE">Elogio</option>
                          <option value="COMPLAINT">Reclamação</option>
                          <option value="INDICATE_NGO">Indicar Ong</option>
                          <option value="OTHER">Outro motivo</option>
                        </Input>
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
                        onChange={(value) => setMessage(value) }
                        value={message}
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
                      style={{
                        background: 'rgb(83,203,164)',
                        borderRadius: '20px'
                      }}
                      color="primary"
                      type="submit"
                    >
                        Enviar solicitação
                      </Button>
                </Col>

              </Row>
            </Form>
            </CardBody>
          </Card>
            </Col>
          </Row>
          
        </Container>
      </>
    );
  }

export default Faq;
