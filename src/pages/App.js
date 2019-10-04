import React                    from 'react';
import styled                   from 'styled-components';
import { GameContextProvider }  from './GameContext';
// import GlobalStyles 	          from "../styles/globalStyle"
import Grid 	                  from "../Components/grid/index"

const App = () => {
  return (
    <GameContextProvider>
      {/* <GlobalStyles /> */}
      <Grid />
    </GameContextProvider>
  );
}

export default App;
