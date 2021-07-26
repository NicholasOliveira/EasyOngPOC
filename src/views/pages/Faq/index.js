
import React, { useEffect, useState } from "react";
import axios from 'axios';
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

function Faq() {

  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    async function getData(){
    const config = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }

    const { data: { content } } = await axios.get('https://easyong.herokuapp.com/api/v1/faqs', config);
      setOngs(content);
    }
    
    getData();
  },[])
  
    return (
      <>
        <Container className="mt--6" 
          fluid 
          style={{
            marginBottom: "100px",
          }}>
          {
          ongs.map(item => 
            <Row className="justify-content-center" key={item?.id}>
              <Col className="card-wrapper" lg="8">
              <Card>
                <CardHeader>
                  <h3 className="mb-0"> 
                    { item.question } 
                  </h3>
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
                        { item.answer }
                        </p>
                      </div>
                    </Col>
                  </Row>
               </CardBody>
              </Card>
            </Col>
            </Row>)
          }
        </Container>
      </>
    );
};

export default Faq;
