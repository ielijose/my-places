import React from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Container from './components/Container';
import Map from './components/Map';
import Sidebar from './components/Sidebar';

const App = (props) => {
  return (
    <Container>
      <GitHubForkRibbon href="https://github.com/ielijose/my-places" target="_blank" position="right">
        Fork me on GitHub
      </GitHubForkRibbon>
      <Sidebar></Sidebar>
      <Map></Map>
    </Container>
  );
};

export default App;
