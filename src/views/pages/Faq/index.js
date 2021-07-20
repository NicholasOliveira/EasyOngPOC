
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SearchHeader.js";

class Faq extends React.Component {
  render() {
    return (
      <>

        <Container className="mt--6" fluid style={{
                          marginBottom: "100px",
                        }}>

 {
                [0].map(item => 
                <>

          <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0"> A ONG já está devidamente registrada?</h3>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center" style={{
                          padding: "0px",
                        }}>
                    <Col sm="9" >
                      <div style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        <p className="lead text-muted" style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                         Sim. Já temos todos os registros necessários ao funcionamento. Porém, ainda não podemos receber recursos governamentais. Para o pagamento de nossas despesas, continuamos dependendo de doações. Também fazemos eventos e bazares para arrecadação de recursos.
                        </p>
                      </div>
                    </Col>
                  </Row>
               </CardBody>
              </Card>
            </Col>
          </Row>

           <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Os membros recebem algum tipo de pagamento pelo seu trabalho?</h3>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center" style={{
                          padding: "0px",
                        }}>
                    <Col sm="9" >
                      <div style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        <p className="lead text-muted" style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                         Sim. Já temos todos os registros necessários ao funcionamento. Porém, ainda não podemos receber recursos governamentais. Para o pagamento de nossas despesas, continuamos dependendo de doações. Também fazemos eventos e bazares para arrecadação de recursos.
                        </p>
                      </div>
                    </Col>
                  </Row>
               </CardBody>
              </Card>
            </Col>
          </Row>
          
           <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Se eu encontrar um animal doente, acidentado ou em outra situação de risco nas ruas, posso chamar o easy ong para resgatar?</h3>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center" style={{
                          padding: "0px",
                        }}>
                    <Col sm="9" >
                      <div style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        <p className="lead text-muted" style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                         Como ainda não temos recursos financeiros, não temos abrigo, carro apropriado e equipamentos de resgate, nem sempre podemos ajudar. Existem situações que fogem totalmente às nossas possibilidades, e cada caso é um caso. A pessoa pode entrar em contato conosco pela fanpage no Facebook e nós iremos avaliar se podemos ajudar. Pedimos sempre a compreensão, pois não temos como atender a todos os pedidos de ajuda. Em caso de animais em estado terminal, com suspeita de Calazar, por exemplo, sugerimos que chamem o Canil Municipal. O próprio Canil se responsabilizará em buscar o cão. Às vezes eles estão sem o carro. Nesse caso, você mesmo pode levar o cão até lá. Não fazemos transportes de cães para o canil.
                        </p>
                      </div>
                    </Col>
                  </Row>


               </CardBody>
              </Card>
            </Col>
          </Row>
          
           
           <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Como entrar em contato com o Easy Ong</h3>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center" style={{
                          padding: "0px",
                        }}>
                    <Col sm="9" >
                      <div style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        <p className="lead text-muted" style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        Através de mensagem enviada pela fanpage da ONG no Facebook. 
                        </p>
                      </div>
                    </Col>
                  </Row>


               </CardBody>
              </Card>
            </Col>
          </Row>
          
           
           <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">Onde fica a ONG?</h3>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center" style={{
                          padding: "0px",
                        }}>
                    <Col sm="9" >
                      <div style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                        <p className="lead text-muted" style={{
                          padding: "0px",
                          margin: "0px",
                        }}>
                         Não temos nosso abrigo ainda. Nossos animais ficam em lares temporários até a adoção.
                        </p>
                      </div>
                    </Col>
                  </Row>


               </CardBody>
              </Card>
            </Col>
          </Row>
          

          </>
)
              }
        </Container>
      </>
    );
  }
}

export default Faq;
