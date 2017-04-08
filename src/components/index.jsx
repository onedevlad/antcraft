import React from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Grid } from 'react-flexbox-grid'

import Header from './Header/index'


class AppComponent extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Header />
      </Grid>
    )
  }
}

export default AppComponent
