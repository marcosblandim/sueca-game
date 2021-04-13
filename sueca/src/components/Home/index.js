import { Link, Redirect } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Panel from './Panel';
import React, { useState } from 'react';

export default function Home() {
  const [redirectTo, setRedirectTo] = useState();

  const redirect = to => () => setRedirectTo(to);

  if (redirectTo != undefined) {
    return <Redirect to={redirectTo} />;
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className='mt-4 '>
            <Panel>
              <h2>Bem vindo(a) ao Sueca Web</h2>
              <Button
                variant='primary'
                size='lg'
                block
                onClick={redirect('/game')}
              >
                Jogar
              </Button>
              <Button
                variant='secondary'
                size='lg'
                block
                onClick={redirect('/rules')}
              >
                Editar regras
              </Button>
            </Panel>
          </Col>
        </Row>
      </Container>
      {/* <Panel></Panel> */}
    </React.Fragment>
  );
}
