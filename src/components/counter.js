import React, { useState } from 'react';

import { Container, Row, Col, Button, Alert } from 'react-bootstrap'

const Counter = () => {

    const [ counter, setCounter ] = useState(0);
    const [ showAlert, setShowAlert ] = useState(false);

    const incrementar = () => {
        if( counter === 10 ){
            setShowAlert(true);
        } else {
            setCounter( counter + 1 );
        }
    };

    const decrementar = () => {
        if( counter === 0 ){
            setShowAlert(true);
        } else {
            setCounter( counter - 1 );
        }
    };

    return (
    <>
        <Container className="contenedor">
            
            <Row className="centrado" >
                <Col md={7} xs={11} >
                    <Alert  show={showAlert} variant="danger" onClose={() => setShowAlert(false)} dismissible>
                        Se ha alcanzado el límite { counter === 0 ? "inferior" : "superior" }
                    </Alert>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h1>{counter}</h1>
                </Col>
            </Row>
            <br/>
            <Row className="centrado">
                <Col md={4} xs={6} >
                    <Button
                        variant="outline-danger"
                        size="lg"
                        onClick={decrementar}
                        disabled={showAlert}
                    >
                        Decrementar
                    </Button>
                </Col>
            
                <Col md={4} xs={6} >
                    <Button
                        variant="outline-success"
                        size="lg"
                        onClick={incrementar}
                        disabled={showAlert}
                    >
                        Incrementar
                    </Button>
                </Col>
            </Row>

        </Container>
    
    </>
    );
}
 
export default Counter;