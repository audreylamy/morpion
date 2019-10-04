import React            from 'react';
import styled           from 'styled-components';
import GlobalStyles 	  from "../styles/globalStyle"
import Grid 	          from "../Components/grid/index"

export const WrapperApp = styled.div `
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Grid>

      </Grid>
    </React.Fragment>
  );
}

export default App;
