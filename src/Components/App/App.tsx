import { Container } from '@material-ui/core';
import React from 'react';
import Timer from '../Tmer/Timer'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import "./App.css"
function App() {
  return (
    <div>


      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Timer />
        </Container>
      </React.Fragment>





    </div>
  );
}

export default App;
