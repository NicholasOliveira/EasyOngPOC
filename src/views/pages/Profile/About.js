
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";
// core components
import SimpleHeader from "components/Headers/SearchHeader.js";
import Button from "reactstrap/lib/Button";

class About extends React.Component {
  render() {
    return (
      <>
        <Container className="mt--6" fluid style={{
          marginBottom: '100px'
        }}>
          <Row className="justify-content-center">
            <Col className="card-wrapper" lg="8">

              <Card>
              
                <CardBody>

                 <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={'https://tamarthi.com.br/wp-content/uploads/2019/12/como-abrir-uma-ong.jpg'}
                      style={{ width: "140px",height: "140px" }}
                    />
                  </a>
                  <div className="pt-4 text-center" style={{
                    marginBottom: '50px'
                  }}>
                    <h5 className="h3 title">
                      <span className="d-block mb-1">Easy Ong</span>
                      <small className="h4 font-weight-light text-muted">
                       Para um mundo melhor!
                      </small>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                    </div>
                  </div>
                

                  <Row className="py-3 align-items-center">
                    <Col sm="9">
                      <div>
                         <h3 className="heading-title text-info mb-0">
                       Quem somos ?
                      </h3>
                        <p className="lead text-muted">
                          queremos conectar recursos (financeiros, materiais, humanos)  para que todas as pessoas tenham a oportunidade de se desenvolver de forma plena e possam resolver problemas de forma criativa.<br /><br />

Sabemos que muitas pessoas n??o conseguem atingir seus potenciais por falta de oportunidade. Tamb??m acreditamos que todos podem aprender e ensinar quando trabalham em conjunto. Por isso, queremos conectar pessoas, ideias, tecnologias, experi??ncias e habilidades para que todos possam crescer juntos!<br /><br />

E ?? durante esta jornada que as comunidades que atendemos passam a ser protagonistas do seu processo de desenvolvimento. Acreditamos que este ?? o ??nico caminho para que isso aconte??a de forma sustent??vel e todos os sejam indiv??duos impactados de forma ativa.<br /><br />
                        </p>
                      </div>
                    </Col>
                  </Row>
                

                  <Row className="py-3 align-items-center">
                    <Col sm="9">
                      <div>
                        <h2 className="display-3">
                          Estamos mudando:
                        </h2>
                        <p className="lead text-muted">
                          Estamos mudando a maneira que interagimos com as comunidades beneficiadas, para que nossos projetos possam ser verdadeiros catalisadores de empoderamento e desenvolvimento.<br /><br />

Por enquanto, ainda precisamos cobrir custos mais objetivos como alimenta????o, sal??rios de professores e materiais. Mas queremos ajudar a comunidade a criar um plano para conseguir satisfazer estas e outras necessidades de forma criativa, sustent??vel e que leve em considera????o o potencial e a participa????o local. <br /><br />

Isto significa que daqui alguns anos, nossos projetos atuais n??o existir??o mais da maneira como existem hoje. <br /><br />

Sabe aquela express??o ???n??o d?? o peixe, ensine a pescar???? ?? o que queremos fazer! Apoiar, conectar e direcionar de forma coletiva o desenvolvimento das comunidades, dentro da sua pr??pria vis??o do que ?? importante e necess??rio.<br /><br />

Mas at?? l??, precisamos garantir que o m??nimo n??o falte e que a mudan??a seja gradual. Quer participar? Contribua agora e seja um catalisador de desenvolvimento tamb??m! <br /><br />
                        </p>
                      </div>
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

export default About;
