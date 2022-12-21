import logo from './logo.svg';
import './App.css';


import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box, Form, Button } from 'react-bulma-components';






function App() {
  
  return (
    <Box mx='5' my='5' justify= 'center' justifyContent= 'center' style={{ width: 800}}>
      <Form.Field>
        My ToDo
        <Form.Control>
        <Form.Checkbox/>
        <Form.Input/>
        </Form.Control>
        
      </Form.Field>
    </Box>
  );
}

export default App;
