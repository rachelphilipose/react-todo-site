import logo from './logo.svg';
import './App.css';


import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Form, Button } from 'react-bulma-components';





function App() {
  return (
    <Box m='6' justifyContent= 'center' style={{ width: 400, padding: 'auto' }}>
      <form>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
              type="email"
              placeholder="my.amazing.email@react-bulma.dev"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field>
          <Form.Label>Password</Form.Label>
          <Form.Control>
            <Form.Input type="password" placeholder="*************" />
          </Form.Control>
        </Form.Field>
        <Button.Group align="right">
          <Button color="primary">Sign in</Button>
        </Button.Group>
      </form>
    </Box>
  );
}

export default App;
