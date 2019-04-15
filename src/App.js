import React, { Component, Fragment } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Main from './pages/Main/index'

class App extends Component {
  render() {
    return (
        <Fragment>
            <GlobalStyles/>
            <Main/>
        </Fragment>
    );
  }
}

export default App;
